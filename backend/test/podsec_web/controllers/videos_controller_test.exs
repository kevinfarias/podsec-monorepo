defmodule PodsecWeb.VideosControllerTest do
  use PodsecWeb.ConnCase

  import Podsec.PostsVideosFixtures

  @create_attrs %{assunto: "some assunto", tags: "some tags", titulo: "some titulo", url: "some url"}
  @update_attrs %{assunto: "some updated assunto", tags: "some updated tags", titulo: "some updated titulo", url: "some updated url"}
  @invalid_attrs %{assunto: nil, tags: nil, titulo: nil, url: nil}

  describe "index" do
    test "lists all videos", %{conn: conn} do
      conn = get(conn, Routes.videos_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Videos"
    end
  end

  describe "new videos" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.videos_path(conn, :new))
      assert html_response(conn, 200) =~ "New Videos"
    end
  end

  describe "create videos" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.videos_path(conn, :create), videos: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.videos_path(conn, :show, id)

      conn = get(conn, Routes.videos_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Videos"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.videos_path(conn, :create), videos: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Videos"
    end
  end

  describe "edit videos" do
    setup [:create_videos]

    test "renders form for editing chosen videos", %{conn: conn, videos: videos} do
      conn = get(conn, Routes.videos_path(conn, :edit, videos))
      assert html_response(conn, 200) =~ "Edit Videos"
    end
  end

  describe "update videos" do
    setup [:create_videos]

    test "redirects when data is valid", %{conn: conn, videos: videos} do
      conn = put(conn, Routes.videos_path(conn, :update, videos), videos: @update_attrs)
      assert redirected_to(conn) == Routes.videos_path(conn, :show, videos)

      conn = get(conn, Routes.videos_path(conn, :show, videos))
      assert html_response(conn, 200) =~ "some updated assunto"
    end

    test "renders errors when data is invalid", %{conn: conn, videos: videos} do
      conn = put(conn, Routes.videos_path(conn, :update, videos), videos: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Videos"
    end
  end

  describe "delete videos" do
    setup [:create_videos]

    test "deletes chosen videos", %{conn: conn, videos: videos} do
      conn = delete(conn, Routes.videos_path(conn, :delete, videos))
      assert redirected_to(conn) == Routes.videos_path(conn, :index)

      assert_error_sent 404, fn ->
        get(conn, Routes.videos_path(conn, :show, videos))
      end
    end
  end

  defp create_videos(_) do
    videos = videos_fixture()
    %{videos: videos}
  end
end
