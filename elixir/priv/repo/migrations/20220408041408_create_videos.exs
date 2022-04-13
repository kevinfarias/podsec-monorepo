defmodule Podsec.Repo.Migrations.CreateVideos do
  use Ecto.Migration

  def change do
    create table(:videos) do
      add :titulo, :text
      add :assunto, :text
      add :url, :string
      add :tags, {:array, :string}
      add :usuariocriacao, references(:usuarios, on_delete: :nothing)
      add :usuarioalteracao, references(:usuarios, on_delete: :nothing)
      add :situacao, references(:situacoes, on_delete: :nothing)

      timestamps()
    end

    create index(:videos, [:usuariocriacao])
    create index(:videos, [:usuarioalteracao])
    create index(:videos, [:situacao])
  end
end
