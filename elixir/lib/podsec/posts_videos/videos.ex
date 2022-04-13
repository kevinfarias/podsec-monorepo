defmodule Podsec.PostsVideos.Videos do
  use Ecto.Schema
  import Ecto.Changeset

  schema "videos" do
    field :assunto, :string
    field :tags, {:array, :string}
    field :titulo, :string
    field :url, :string
    field :usuariocriacao, :id
    field :usuarioalteracao, :id
    field :situacao, :id

    timestamps()
  end

  @doc false
  def changeset(videos, attrs) do
    videos
    |> cast(attrs, [:titulo, :assunto, :url, :tags])
    |> validate_required([:titulo, :assunto, :url, :tags])
  end
end
