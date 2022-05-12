defmodule PodsecWeb.ApiController do
    use PodsecWeb, :controller

    alias Podsec.Posts

    action_fallback Podsec.FallbackController

    def all(conn, _params) do
        conteudos = Posts.get_all()
        render(conn, "index.json", conteudos: conteudos)
    end
end
