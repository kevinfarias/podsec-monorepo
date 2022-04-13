defmodule Podsec.PostsNews.Noticias do
  use Ecto.Schema
  import Ecto.Changeset

  schema "noticias" do
    field :assunto, :string
    field :assuntocomplemento, :string
    field :tags, {:array, :string}
    field :titulo, :string
    field :url, :string
    field :usuariocriacao, :id
    field :usuarioalteracao, :id
    field :situacao, :id

    timestamps()
  end

  @doc false
  def changeset(noticias, attrs) do
    noticias
    |> cast(attrs, [:titulo, :assunto, :assuntocomplemento, :url, :tags])
    |> validate_required([:titulo, :assunto, :assuntocomplemento, :url, :tags])
  end
end
