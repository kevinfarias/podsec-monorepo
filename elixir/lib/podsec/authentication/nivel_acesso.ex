defmodule Podsec.Authentication.NivelAcesso do
  use Ecto.Schema
  import Ecto.Changeset

  schema "niveis_acesso" do
    field :descricao, :string

    timestamps()
  end

  @doc false
  def changeset(nivel_acesso, attrs) do
    nivel_acesso
    |> cast(attrs, [:descricao])
    |> validate_required([:descricao])
  end
end
