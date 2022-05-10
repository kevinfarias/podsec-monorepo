defmodule Podsec.PostsAudio.PodcastSecao do
  use Ecto.Schema
  import Ecto.Changeset

  schema "podcast_secoes" do
    field :hora, :time
    field :titulo, :string

    timestamps()
  end

  @doc false
  def changeset(podcast_secao, attrs) do
    podcast_secao
    |> cast(attrs, [:titulo, :hora])
    |> validate_required([:titulo, :hora])
  end
end
