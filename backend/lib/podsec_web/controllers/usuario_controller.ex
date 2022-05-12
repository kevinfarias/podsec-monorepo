defmodule PodsecWeb.UsuarioController do
  use PodsecWeb, :controller

  alias Podsec.Authentication
  alias Podsec.Authentication.Usuario

  def index(conn, _params) do
    usuarios = Authentication.list_usuarios()
    render(conn, "index.html", usuarios: usuarios)
  end

  def new(conn, _params) do
    changeset = Authentication.change_usuario(%Usuario{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"usuario" => usuario_params}) do
    case Authentication.create_usuario(usuario_params) do
      {:ok, usuario} ->
        conn
        |> put_flash(:info, "Usuario created successfully.")
        |> redirect(to: Routes.usuario_path(conn, :show, usuario))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    usuario = Authentication.get_usuario!(id)
    render(conn, "show.html", usuario: usuario)
  end

  def edit(conn, %{"id" => id}) do
    usuario = Authentication.get_usuario!(id)
    changeset = Authentication.change_usuario(usuario)
    render(conn, "edit.html", usuario: usuario, changeset: changeset)
  end

  def update(conn, %{"id" => id, "usuario" => usuario_params}) do
    usuario = Authentication.get_usuario!(id)

    case Authentication.update_usuario(usuario, usuario_params) do
      {:ok, usuario} ->
        conn
        |> put_flash(:info, "Usuario updated successfully.")
        |> redirect(to: Routes.usuario_path(conn, :show, usuario))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", usuario: usuario, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    usuario = Authentication.get_usuario!(id)
    {:ok, _usuario} = Authentication.delete_usuario(usuario)

    conn
    |> put_flash(:info, "Usuario deleted successfully.")
    |> redirect(to: Routes.usuario_path(conn, :index))
  end
end
