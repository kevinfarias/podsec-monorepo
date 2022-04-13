defmodule Podsec.PostsVideosFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Podsec.PostsVideos` context.
  """

  @doc """
  Generate a videos.
  """
  def videos_fixture(attrs \\ %{}) do
    {:ok, videos} =
      attrs
      |> Enum.into(%{
        assunto: "some assunto",
        tags: "some tags",
        titulo: "some titulo",
        url: "some url"
      })
      |> Podsec.PostsVideos.create_videos()

    videos
  end
end
