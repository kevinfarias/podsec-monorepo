defmodule Podsec.AuthenticationFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Podsec.Authentication` context.
  """

  @doc """
  Generate a nivel_acesso.
  """
  def nivel_acesso_fixture(attrs \\ %{}) do
    {:ok, nivel_acesso} =
      attrs
      |> Enum.into(%{
        descricao: "some descricao"
      })
      |> Podsec.Authentication.create_nivel_acesso()

    nivel_acesso
  end

  @doc """
  Generate a usuario.
  """
  def usuario_fixture(attrs \\ %{}) do
    {:ok, usuario} =
      attrs
      |> Enum.into(%{
        ativo: true,
        email: "some email",
        nomecompleto: "some nomecompleto",
        recebenewsletter: true,
        senha: "some senha",
        usuario: "some usuario"
      })
      |> Podsec.Authentication.create_usuario()

    usuario
  end

  def unique_usuario_email, do: "usuario#{System.unique_integer()}@example.com"
  def valid_usuario_password, do: "hello world!"

  def valid_usuario_attributes(attrs \\ %{}) do
    Enum.into(attrs, %{
      email: unique_usuario_email(),
      password: valid_usuario_password()
    })
  end

  def usuario_fixture(attrs \\ %{}) do
    {:ok, usuario} =
      attrs
      |> valid_usuario_attributes()
      |> Podsec.Authentication.register_usuario()

    usuario
  end

  def extract_usuario_token(fun) do
    {:ok, captured_email} = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token | _] = String.split(captured_email.text_body, "[TOKEN]")
    token
  end
end
