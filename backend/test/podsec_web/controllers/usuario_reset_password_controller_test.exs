defmodule PodsecWeb.UsuarioResetPasswordControllerTest do
  use PodsecWeb.ConnCase, async: true

  alias Podsec.Authentication
  alias Podsec.Repo
  import Podsec.AuthenticationFixtures

  setup do
    %{usuario: usuario_fixture()}
  end

  describe "GET /usuarios/reset_password" do
    test "renders the reset password page", %{conn: conn} do
      conn = get(conn, Routes.usuario_reset_password_path(conn, :new))
      response = html_response(conn, 200)
      assert response =~ "<h1>Forgot your password?</h1>"
    end
  end

  describe "POST /usuarios/reset_password" do
    @tag :capture_log
    test "sends a new reset password token", %{conn: conn, usuario: usuario} do
      conn =
        post(conn, Routes.usuario_reset_password_path(conn, :create), %{
          "usuario" => %{"email" => usuario.email}
        })

      assert redirected_to(conn) == "/"
      assert get_flash(conn, :info) =~ "If your email is in our system"
      assert Repo.get_by!(Authentication.UsuarioToken, usuario_id: usuario.id).context == "reset_password"
    end

    test "does not send reset password token if email is invalid", %{conn: conn} do
      conn =
        post(conn, Routes.usuario_reset_password_path(conn, :create), %{
          "usuario" => %{"email" => "unknown@example.com"}
        })

      assert redirected_to(conn) == "/"
      assert get_flash(conn, :info) =~ "If your email is in our system"
      assert Repo.all(Authentication.UsuarioToken) == []
    end
  end

  describe "GET /usuarios/reset_password/:token" do
    setup %{usuario: usuario} do
      token =
        extract_usuario_token(fn url ->
          Authentication.deliver_usuario_reset_password_instructions(usuario, url)
        end)

      %{token: token}
    end

    test "renders reset password", %{conn: conn, token: token} do
      conn = get(conn, Routes.usuario_reset_password_path(conn, :edit, token))
      assert html_response(conn, 200) =~ "<h1>Reset password</h1>"
    end

    test "does not render reset password with invalid token", %{conn: conn} do
      conn = get(conn, Routes.usuario_reset_password_path(conn, :edit, "oops"))
      assert redirected_to(conn) == "/"
      assert get_flash(conn, :error) =~ "Reset password link is invalid or it has expired"
    end
  end

  describe "PUT /usuarios/reset_password/:token" do
    setup %{usuario: usuario} do
      token =
        extract_usuario_token(fn url ->
          Authentication.deliver_usuario_reset_password_instructions(usuario, url)
        end)

      %{token: token}
    end

    test "resets password once", %{conn: conn, usuario: usuario, token: token} do
      conn =
        put(conn, Routes.usuario_reset_password_path(conn, :update, token), %{
          "usuario" => %{
            "password" => "new valid password",
            "password_confirmation" => "new valid password"
          }
        })

      assert redirected_to(conn) == Routes.usuario_session_path(conn, :new)
      refute get_session(conn, :usuario_token)
      assert get_flash(conn, :info) =~ "Password reset successfully"
      assert Authentication.get_usuario_by_email_and_password(usuario.email, "new valid password")
    end

    test "does not reset password on invalid data", %{conn: conn, token: token} do
      conn =
        put(conn, Routes.usuario_reset_password_path(conn, :update, token), %{
          "usuario" => %{
            "password" => "too short",
            "password_confirmation" => "does not match"
          }
        })

      response = html_response(conn, 200)
      assert response =~ "<h1>Reset password</h1>"
      assert response =~ "should be at least 12 character(s)"
      assert response =~ "does not match password"
    end

    test "does not reset password with invalid token", %{conn: conn} do
      conn = put(conn, Routes.usuario_reset_password_path(conn, :update, "oops"))
      assert redirected_to(conn) == "/"
      assert get_flash(conn, :error) =~ "Reset password link is invalid or it has expired"
    end
  end
end
