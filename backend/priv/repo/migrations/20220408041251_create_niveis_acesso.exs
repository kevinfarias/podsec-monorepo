defmodule Podsec.Repo.Migrations.CreateNiveisAcesso do
  use Ecto.Migration

  def change do
    create table(:niveis_acesso) do
      add :descricao, :text

      timestamps()
    end
  end
end
