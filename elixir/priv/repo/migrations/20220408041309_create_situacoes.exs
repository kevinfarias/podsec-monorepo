defmodule Podsec.Repo.Migrations.CreateSituacoes do
  use Ecto.Migration

  def change do
    create table(:situacoes) do
      add :descricao, :text

      timestamps()
    end
  end
end
