defmodule Podsec.Repo.Migrations.CreatePodcasts do
  use Ecto.Migration

  def change do
    create table(:podcasts) do
      add :titulo, :text
      add :assunto, :text
      add :url, :string
      add :tags, {:array, :string}
      add :usuariocriacao, references(:usuarios, on_delete: :nothing)
      add :usuarioalteracao, references(:usuarios, on_delete: :nothing)
      add :situacao, references(:situacoes, on_delete: :nothing)

      timestamps()
    end

    create index(:podcasts, [:usuariocriacao])
    create index(:podcasts, [:usuarioalteracao])
    create index(:podcasts, [:situacao])
  end
end
