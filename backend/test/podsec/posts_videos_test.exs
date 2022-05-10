defmodule Podsec.PostsVideosTest do
  use Podsec.DataCase

  alias Podsec.PostsVideos

  describe "videos" do
    alias Podsec.PostsVideos.Videos

    import Podsec.PostsVideosFixtures

    @invalid_attrs %{assunto: nil, tags: nil, titulo: nil, url: nil}

    test "list_videos/0 returns all videos" do
      videos = videos_fixture()
      assert PostsVideos.list_videos() == [videos]
    end

    test "get_videos!/1 returns the videos with given id" do
      videos = videos_fixture()
      assert PostsVideos.get_videos!(videos.id) == videos
    end

    test "create_videos/1 with valid data creates a videos" do
      valid_attrs = %{assunto: "some assunto", tags: "some tags", titulo: "some titulo", url: "some url"}

      assert {:ok, %Videos{} = videos} = PostsVideos.create_videos(valid_attrs)
      assert videos.assunto == "some assunto"
      assert videos.tags == "some tags"
      assert videos.titulo == "some titulo"
      assert videos.url == "some url"
    end

    test "create_videos/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostsVideos.create_videos(@invalid_attrs)
    end

    test "update_videos/2 with valid data updates the videos" do
      videos = videos_fixture()
      update_attrs = %{assunto: "some updated assunto", tags: "some updated tags", titulo: "some updated titulo", url: "some updated url"}

      assert {:ok, %Videos{} = videos} = PostsVideos.update_videos(videos, update_attrs)
      assert videos.assunto == "some updated assunto"
      assert videos.tags == "some updated tags"
      assert videos.titulo == "some updated titulo"
      assert videos.url == "some updated url"
    end

    test "update_videos/2 with invalid data returns error changeset" do
      videos = videos_fixture()
      assert {:error, %Ecto.Changeset{}} = PostsVideos.update_videos(videos, @invalid_attrs)
      assert videos == PostsVideos.get_videos!(videos.id)
    end

    test "delete_videos/1 deletes the videos" do
      videos = videos_fixture()
      assert {:ok, %Videos{}} = PostsVideos.delete_videos(videos)
      assert_raise Ecto.NoResultsError, fn -> PostsVideos.get_videos!(videos.id) end
    end

    test "change_videos/1 returns a videos changeset" do
      videos = videos_fixture()
      assert %Ecto.Changeset{} = PostsVideos.change_videos(videos)
    end
  end
end
