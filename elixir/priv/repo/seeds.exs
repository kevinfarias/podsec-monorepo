# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
# Podsec.#     Podsec.Repo.insert!(%Podsec.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Podsec.Repo
alias Podsec.Posts.Situacao

alias Podsec.Authentication.NivelAcesso

Repo.insert!(%Situacao{
    descricao: "criado"
})

Repo.insert!(%Situacao{
    descricao: "publicado"
})

Repo.insert!(%Situacao{
    descricao: "deletado"
})

Repo.insert!(%NivelAcesso{
    descricao: "administrador"
})

Repo.insert!(%NivelAcesso{
    descricao: "criador-de-conteudo"
})

Repo.insert!(%NivelAcesso{
    descricao: "consumidor"
})

alias Podsec.Authentication

Repo.insert(Authentication.register_usuario(
    %{
        nomecompleto: "administrador",
        usuario: "admin",
        senha: "admin",
        email: "kevin.v.farias@gmail.com",
        ativo: true,
        recebenewsletter: true,
        nivelacesso: 1,
        password: "AdminAdmin123"
    }
))
