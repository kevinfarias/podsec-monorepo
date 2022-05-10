defmodule Podsec.Repo.Migrations.CreatePodcastSecoes do
  use Ecto.Migration

  def change do
    create table(:podcast_secoes) do
      add :titulo, :text
      add :hora, :time

      timestamps()
    end
  end
end
