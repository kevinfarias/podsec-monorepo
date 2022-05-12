defmodule PodsecWeb.VideosController do
  use PodsecWeb, :controller

  alias Podsec.PostsVideos
  alias Podsec.PostsVideos.Videos

  def index(conn, _params) do
    videos = PostsVideos.list_videos()
    render(conn, "index.html", videos: videos)
  end

  def new(conn, _params) do
    changeset = PostsVideos.change_videos(%Videos{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"videos" => videos_params}) do
    case PostsVideos.create_videos(videos_params) do
      {:ok, videos} ->
        conn
        |> put_flash(:info, "Videos created successfully.")
        |> redirect(to: Routes.videos_path(conn, :show, videos))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    videos = PostsVideos.get_videos!(id)
    render(conn, "show.html", videos: videos)
  end

  def edit(conn, %{"id" => id}) do
    videos = PostsVideos.get_videos!(id)
    changeset = PostsVideos.change_videos(videos)
    render(conn, "edit.html", videos: videos, changeset: changeset)
  end

  def update(conn, %{"id" => id, "videos" => videos_params}) do
    videos = PostsVideos.get_videos!(id)

    case PostsVideos.update_videos(videos, videos_params) do
      {:ok, videos} ->
        conn
        |> put_flash(:info, "Videos updated successfully.")
        |> redirect(to: Routes.videos_path(conn, :show, videos))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", videos: videos, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    videos = PostsVideos.get_videos!(id)
    {:ok, _videos} = PostsVideos.delete_videos(videos)

    conn
    |> put_flash(:info, "Videos deleted successfully.")
    |> redirect(to: Routes.videos_path(conn, :index))
  end
end
