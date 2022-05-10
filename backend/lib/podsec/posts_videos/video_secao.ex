defmodule Podsec.PostsVideos.VideoSecao do
  use Ecto.Schema
  import Ecto.Changeset

  schema "video_secoes" do
    field :assunto, :string
    field :hora, :time

    timestamps()
  end

  @doc false
  def changeset(video_secao, attrs) do
    video_secao
    |> cast(attrs, [:assunto, :hora])
    |> validate_required([:assunto, :hora])
  end
end
