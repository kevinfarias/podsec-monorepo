defmodule PodsecWeb.ApiView do
    use PodsecWeb, :view
    alias PodsecWeb.ApiView
    alias Podsec.S3Service

    def render("index.json", %{conteudos: conteudos}) do
      %{data: render_many(conteudos, ApiView, "show.json")}
    end

    def render("show.json", %{api: conteudo}) do
      %{
        id: conteudo.id,
        titulo: conteudo.titulo,
        assunto: conteudo.assunto,
        url: S3Service.get(conteudo.url),
        tags: conteudo.tags,
        inserted_at: conteudo.inserted_at,
        updated_at: conteudo.updated_at
      }
    end

    def render("showOne.json", %{conteudo: conteudo}) do
      [
        conteudo,
        moneyFrom,
        moneyTo
      ] = conteudo
      %{
        id: conteudo.id,
        user_id: conteudo.user,
        from: moneyFrom.name,
        from_value: conteudo.from_value,
        to: moneyTo.name,
        to_value: conteudo.to_value,
        tax: conteudo.tax,
        date: conteudo.inserted_at
      }
    end

    def render("error.json", %{message: message}) do
      %{
        status: :error,
        message: message
      }
    end
end
