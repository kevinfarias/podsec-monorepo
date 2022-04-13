defmodule PodsecWeb.NoticiasController do
  use PodsecWeb, :controller

  alias Podsec.PostsNews
  alias Podsec.PostsNews.Noticias

  def index(conn, _params) do
    noticias = PostsNews.list_noticias()
    render(conn, "index.html", noticias: noticias)
  end

  def new(conn, _params) do
    changeset = PostsNews.change_noticias(%Noticias{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"noticias" => noticias_params}) do
    case PostsNews.create_noticias(noticias_params) do
      {:ok, noticias} ->
        conn
        |> put_flash(:info, "Noticias created successfully.")
        |> redirect(to: Routes.noticias_path(conn, :show, noticias))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    noticias = PostsNews.get_noticias!(id)
    render(conn, "show.html", noticias: noticias)
  end

  def edit(conn, %{"id" => id}) do
    noticias = PostsNews.get_noticias!(id)
    changeset = PostsNews.change_noticias(noticias)
    render(conn, "edit.html", noticias: noticias, changeset: changeset)
  end

  def update(conn, %{"id" => id, "noticias" => noticias_params}) do
    noticias = PostsNews.get_noticias!(id)

    case PostsNews.update_noticias(noticias, noticias_params) do
      {:ok, noticias} ->
        conn
        |> put_flash(:info, "Noticias updated successfully.")
        |> redirect(to: Routes.noticias_path(conn, :show, noticias))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", noticias: noticias, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    noticias = PostsNews.get_noticias!(id)
    {:ok, _noticias} = PostsNews.delete_noticias(noticias)

    conn
    |> put_flash(:info, "Noticias deleted successfully.")
    |> redirect(to: Routes.noticias_path(conn, :index))
  end
end
