defmodule Podsec.Posts.Situacao do
  use Ecto.Schema
  import Ecto.Changeset

  schema "situacoes" do
    field :descricao, :string

    timestamps()
  end

  @doc false
  def changeset(situacao, attrs) do
    situacao
    |> cast(attrs, [:descricao])
    |> validate_required([:descricao])
  end
end
