defmodule PodsecWeb.PodcastController do
  use PodsecWeb, :controller

  alias Podsec.PostsAudio
  alias Podsec.PostsAudio.Podcast
  alias Podsec.S3Service

  def index(conn, _params) do
    podcasts = PostsAudio.list_podcasts()
    render(conn, "index.html", podcasts: podcasts)
  end

  def new(conn, _params) do
    changeset = PostsAudio.change_podcast(%Podcast{})
    render(conn, "new.html", changeset: changeset)
  end

  def upload_if_file_provided(url) do
    if (url) do
        S3Service.upload(url, "podcasts/")
    else
        ""
    end
  end

  def create(conn, %{"podcast" => podcast_params}) do
    fileUploaded = upload_if_file_provided(podcast_params["url"])
    podcast_params = %{ podcast_params | "url"=>fileUploaded }
    case PostsAudio.create_podcast(podcast_params) do
      {:ok, podcast} ->
        conn
        |> put_flash(:info, "Podcast created successfully.")
        |> redirect(to: Routes.podcast_path(conn, :show, podcast))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    podcast = PostsAudio.get_podcast!(id)
    render(conn, "show.html", podcast: podcast)
  end

  def edit(conn, %{"id" => id}) do
    podcast = PostsAudio.get_podcast!(id)
    changeset = PostsAudio.change_podcast(podcast)
    render(conn, "edit.html", podcast: podcast, changeset: changeset)
  end

  def update(conn, %{"id" => id, "podcast" => podcast_params}) do
    fileUploaded = upload_if_file_provided(podcast_params["url"])
    podcast_params = %{ podcast_params | "url"=>fileUploaded }
    podcast = PostsAudio.get_podcast!(id)

    case PostsAudio.update_podcast(podcast, podcast_params) do
      {:ok, podcast} ->
        conn
        |> put_flash(:info, "Podcast updated successfully.")
        |> redirect(to: Routes.podcast_path(conn, :show, podcast))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", podcast: podcast, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    podcast = PostsAudio.get_podcast!(id)
    if podcast["url"] do
      S3Service.delete(podcast["url"])
    end

    {:ok, _podcast} = PostsAudio.delete_podcast(podcast)

    conn
    |> put_flash(:info, "Podcast deleted successfully.")
    |> redirect(to: Routes.podcast_path(conn, :index))
  end
end
