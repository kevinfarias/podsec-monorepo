defmodule PodsecWeb.UsuarioRegistrationController do
  use PodsecWeb, :controller

  alias Podsec.Authentication
  alias Podsec.Authentication.Usuario
  alias PodsecWeb.UsuarioAuth

  def new(conn, _params) do
    changeset = Authentication.change_usuario_registration(%Usuario{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"usuario" => usuario_params}) do
    case Authentication.register_usuario(usuario_params) do
      {:ok, usuario} ->
        {:ok, _} =
          Authentication.deliver_usuario_confirmation_instructions(
            usuario,
            &Routes.usuario_confirmation_url(conn, :edit, &1)
          )

        conn
        |> put_flash(:info, "Usuario created successfully.")
        |> UsuarioAuth.log_in_usuario(usuario)

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end
end
