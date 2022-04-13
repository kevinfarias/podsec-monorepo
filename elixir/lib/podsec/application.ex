defmodule Podsec.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Podsec.Repo,
      # Start the Telemetry supervisor
      PodsecWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Podsec.PubSub},
      # Start the Endpoint (http/https)
      PodsecWeb.Endpoint
      # Start a worker by calling: Podsec.Worker.start_link(arg)
      # {Podsec.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Podsec.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    PodsecWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
