defmodule Podsec.PostsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Podsec.Posts` context.
  """

  @doc """
  Generate a situacao.
  """
  def situacao_fixture(attrs \\ %{}) do
    {:ok, situacao} =
      attrs
      |> Enum.into(%{
        descricao: "some descricao"
      })
      |> Podsec.Posts.create_situacao()

    situacao
  end
end
