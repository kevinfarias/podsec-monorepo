defmodule Podsec.PostsAudioFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Podsec.PostsAudio` context.
  """

  @doc """
  Generate a podcast.
  """
  def podcast_fixture(attrs \\ %{}) do
    {:ok, podcast} =
      attrs
      |> Enum.into(%{
        assunto: "some assunto",
        tags: "some tags",
        titulo: "some titulo",
        url: "some url"
      })
      |> Podsec.PostsAudio.create_podcast()

    podcast
  end
end
