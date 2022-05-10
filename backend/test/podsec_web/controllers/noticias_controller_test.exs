defmodule PodsecWeb.NoticiasControllerTest do
  use PodsecWeb.ConnCase

  import Podsec.PostsNewsFixtures

  @create_attrs %{assunto: "some assunto", assuntocomplemento: "some assuntocomplemento", tags: "some tags", titulo: "some titulo", url: "some url"}
  @update_attrs %{assunto: "some updated assunto", assuntocomplemento: "some updated assuntocomplemento", tags: "some updated tags", titulo: "some updated titulo", url: "some updated url"}
  @invalid_attrs %{assunto: nil, assuntocomplemento: nil, tags: nil, titulo: nil, url: nil}

  describe "index" do
    test "lists all noticias", %{conn: conn} do
      conn = get(conn, Routes.noticias_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Noticias"
    end
  end

  describe "new noticias" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.noticias_path(conn, :new))
      assert html_response(conn, 200) =~ "New Noticias"
    end
  end

  describe "create noticias" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.noticias_path(conn, :create), noticias: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.noticias_path(conn, :show, id)

      conn = get(conn, Routes.noticias_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Noticias"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.noticias_path(conn, :create), noticias: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Noticias"
    end
  end

  describe "edit noticias" do
    setup [:create_noticias]

    test "renders form for editing chosen noticias", %{conn: conn, noticias: noticias} do
      conn = get(conn, Routes.noticias_path(conn, :edit, noticias))
      assert html_response(conn, 200) =~ "Edit Noticias"
    end
  end

  describe "update noticias" do
    setup [:create_noticias]

    test "redirects when data is valid", %{conn: conn, noticias: noticias} do
      conn = put(conn, Routes.noticias_path(conn, :update, noticias), noticias: @update_attrs)
      assert redirected_to(conn) == Routes.noticias_path(conn, :show, noticias)

      conn = get(conn, Routes.noticias_path(conn, :show, noticias))
      assert html_response(conn, 200) =~ "some updated assunto"
    end

    test "renders errors when data is invalid", %{conn: conn, noticias: noticias} do
      conn = put(conn, Routes.noticias_path(conn, :update, noticias), noticias: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Noticias"
    end
  end

  describe "delete noticias" do
    setup [:create_noticias]

    test "deletes chosen noticias", %{conn: conn, noticias: noticias} do
      conn = delete(conn, Routes.noticias_path(conn, :delete, noticias))
      assert redirected_to(conn) == Routes.noticias_path(conn, :index)

      assert_error_sent 404, fn ->
        get(conn, Routes.noticias_path(conn, :show, noticias))
      end
    end
  end

  defp create_noticias(_) do
    noticias = noticias_fixture()
    %{noticias: noticias}
  end
end
