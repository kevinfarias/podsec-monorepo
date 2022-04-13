defmodule Podsec.Repo.Migrations.CreateVideoSecoes do
  use Ecto.Migration

  def change do
    create table(:video_secoes) do
      add :assunto, :text
      add :hora, :time

      timestamps()
    end
  end
end
