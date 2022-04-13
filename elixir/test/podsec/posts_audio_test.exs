defmodule Podsec.PostsAudioTest do
  use Podsec.DataCase

  alias Podsec.PostsAudio

  describe "podcasts" do
    alias Podsec.PostsAudio.Podcast

    import Podsec.PostsAudioFixtures

    @invalid_attrs %{assunto: nil, tags: nil, titulo: nil, url: nil}

    test "list_podcasts/0 returns all podcasts" do
      podcast = podcast_fixture()
      assert PostsAudio.list_podcasts() == [podcast]
    end

    test "get_podcast!/1 returns the podcast with given id" do
      podcast = podcast_fixture()
      assert PostsAudio.get_podcast!(podcast.id) == podcast
    end

    test "create_podcast/1 with valid data creates a podcast" do
      valid_attrs = %{assunto: "some assunto", tags: "some tags", titulo: "some titulo", url: "some url"}

      assert {:ok, %Podcast{} = podcast} = PostsAudio.create_podcast(valid_attrs)
      assert podcast.assunto == "some assunto"
      assert podcast.tags == "some tags"
      assert podcast.titulo == "some titulo"
      assert podcast.url == "some url"
    end

    test "create_podcast/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostsAudio.create_podcast(@invalid_attrs)
    end

    test "update_podcast/2 with valid data updates the podcast" do
      podcast = podcast_fixture()
      update_attrs = %{assunto: "some updated assunto", tags: "some updated tags", titulo: "some updated titulo", url: "some updated url"}

      assert {:ok, %Podcast{} = podcast} = PostsAudio.update_podcast(podcast, update_attrs)
      assert podcast.assunto == "some updated assunto"
      assert podcast.tags == "some updated tags"
      assert podcast.titulo == "some updated titulo"
      assert podcast.url == "some updated url"
    end

    test "update_podcast/2 with invalid data returns error changeset" do
      podcast = podcast_fixture()
      assert {:error, %Ecto.Changeset{}} = PostsAudio.update_podcast(podcast, @invalid_attrs)
      assert podcast == PostsAudio.get_podcast!(podcast.id)
    end

    test "delete_podcast/1 deletes the podcast" do
      podcast = podcast_fixture()
      assert {:ok, %Podcast{}} = PostsAudio.delete_podcast(podcast)
      assert_raise Ecto.NoResultsError, fn -> PostsAudio.get_podcast!(podcast.id) end
    end

    test "change_podcast/1 returns a podcast changeset" do
      podcast = podcast_fixture()
      assert %Ecto.Changeset{} = PostsAudio.change_podcast(podcast)
    end
  end
end
