defmodule PodsecWeb.Router do
  use PodsecWeb, :router

  import PodsecWeb.UsuarioAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {PodsecWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_usuario
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PodsecWeb do
    pipe_through :browser

    get "/", PageController, :index
    resources "/podcasts", PodcastController
  end

  # Other scopes may use custom stacks.
  # scope "/api", PodsecWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: PodsecWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  scope "/", PodsecWeb do
    pipe_through [:browser, :redirect_if_usuario_is_authenticated]

    get "/usuarios/log_in", UsuarioSessionController, :new
    post "/usuarios/log_in", UsuarioSessionController, :create
    get "/usuarios/reset_password", UsuarioResetPasswordController, :new
    post "/usuarios/reset_password", UsuarioResetPasswordController, :create
    get "/usuarios/reset_password/:token", UsuarioResetPasswordController, :edit
    put "/usuarios/reset_password/:token", UsuarioResetPasswordController, :update
  end

  scope "/", PodsecWeb do
    pipe_through [:browser, :require_authenticated_usuario]

    get "/usuarios/settings", UsuarioSettingsController, :edit
    put "/usuarios/settings", UsuarioSettingsController, :update
    get "/usuarios/settings/confirm_email/:token", UsuarioSettingsController, :confirm_email
  end

  scope "/", PodsecWeb do
    pipe_through [:browser]

    delete "/usuarios/log_out", UsuarioSessionController, :delete
    get "/usuarios/confirm", UsuarioConfirmationController, :new
    post "/usuarios/confirm", UsuarioConfirmationController, :create
    get "/usuarios/confirm/:token", UsuarioConfirmationController, :edit
    post "/usuarios/confirm/:token", UsuarioConfirmationController, :update
  end

  scope "/api/v1", PodsecWeb do
    pipe_through [:api]

    get "/all", ApiController, :all
  end
end
