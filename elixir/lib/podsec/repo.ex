defmodule Podsec.Repo do
  use Ecto.Repo,
    otp_app: :podsec,
    adapter: Ecto.Adapters.Postgres
end
