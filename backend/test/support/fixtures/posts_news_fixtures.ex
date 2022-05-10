defmodule Podsec.PostsNewsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Podsec.PostsNews` context.
  """

  @doc """
  Generate a noticias.
  """
  def noticias_fixture(attrs \\ %{}) do
    {:ok, noticias} =
      attrs
      |> Enum.into(%{
        assunto: "some assunto",
        assuntocomplemento: "some assuntocomplemento",
        tags: "some tags",
        titulo: "some titulo",
        url: "some url"
      })
      |> Podsec.PostsNews.create_noticias()

    noticias
  end
end
