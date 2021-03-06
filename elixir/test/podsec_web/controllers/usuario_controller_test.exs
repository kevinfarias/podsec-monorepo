defmodule PodsecWeb.UsuarioControllerTest do
  use PodsecWeb.ConnCase

  import Podsec.AuthenticationFixtures

  @create_attrs %{ativo: true, email: "some email", nomecompleto: "some nomecompleto", recebenewsletter: true, senha: "some senha", usuario: "some usuario"}
  @update_attrs %{ativo: false, email: "some updated email", nomecompleto: "some updated nomecompleto", recebenewsletter: false, senha: "some updated senha", usuario: "some updated usuario"}
  @invalid_attrs %{ativo: nil, email: nil, nomecompleto: nil, recebenewsletter: nil, senha: nil, usuario: nil}

  describe "index" do
    test "lists all usuarios", %{conn: conn} do
      conn = get(conn, Routes.usuario_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Usuarios"
    end
  end

  describe "new usuario" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.usuario_path(conn, :new))
      assert html_response(conn, 200) =~ "New Usuario"
    end
  end

  describe "create usuario" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.usuario_path(conn, :create), usuario: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.usuario_path(conn, :show, id)

      conn = get(conn, Routes.usuario_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Usuario"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.usuario_path(conn, :create), usuario: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Usuario"
    end
  end

  describe "edit usuario" do
    setup [:create_usuario]

    test "renders form for editing chosen usuario", %{conn: conn, usuario: usuario} do
      conn = get(conn, Routes.usuario_path(conn, :edit, usuario))
      assert html_response(conn, 200) =~ "Edit Usuario"
    end
  end

  describe "update usuario" do
    setup [:create_usuario]

    test "redirects when data is valid", %{conn: conn, usuario: usuario} do
      conn = put(conn, Routes.usuario_path(conn, :update, usuario), usuario: @update_attrs)
      assert redirected_to(conn) == Routes.usuario_path(conn, :show, usuario)

      conn = get(conn, Routes.usuario_path(conn, :show, usuario))
      assert html_response(conn, 200) =~ "some updated email"
    end

    test "renders errors when data is invalid", %{conn: conn, usuario: usuario} do
      conn = put(conn, Routes.usuario_path(conn, :update, usuario), usuario: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Usuario"
    end
  end

  describe "delete usuario" do
    setup [:create_usuario]

    test "deletes chosen usuario", %{conn: conn, usuario: usuario} do
      conn = delete(conn, Routes.usuario_path(conn, :delete, usuario))
      assert redirected_to(conn) == Routes.usuario_path(conn, :index)

      assert_error_sent 404, fn ->
        get(conn, Routes.usuario_path(conn, :show, usuario))
      end
    end
  end

  defp create_usuario(_) do
    usuario = usuario_fixture()
    %{usuario: usuario}
  end
end
