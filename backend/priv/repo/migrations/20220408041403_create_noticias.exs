defmodule Podsec.Repo.Migrations.CreateNoticias do
  use Ecto.Migration

  def change do
    create table(:noticias) do
      add :titulo, :text
      add :assunto, :text
      add :assuntocomplemento, :text
      add :url, :string
      add :tags, {:array, :string}
      add :usuariocriacao, references(:usuarios, on_delete: :nothing)
      add :usuarioalteracao, references(:usuarios, on_delete: :nothing)
      add :situacao, references(:situacoes, on_delete: :nothing)

      timestamps()
    end

    create index(:noticias, [:usuariocriacao])
    create index(:noticias, [:usuarioalteracao])
    create index(:noticias, [:situacao])
  end
end
