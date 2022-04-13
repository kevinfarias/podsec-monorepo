defmodule Podsec.PostsAudio.Podcast do
  use Ecto.Schema
  import Ecto.Changeset

  schema "podcasts" do
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
  def changeset(podcast, attrs) do
    attrs = if attrs["tags"], do: %{ attrs | "tags" => String.split(attrs["tags"], ";") }, else: attrs
    podcast
    |> cast(attrs, [:titulo, :assunto, :url, :tags])
    |> validate_required([:titulo, :assunto, :url, :tags])
  end
end
