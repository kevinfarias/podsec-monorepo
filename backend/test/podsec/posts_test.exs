defmodule Podsec.PostsTest do
  use Podsec.DataCase

  alias Podsec.Posts

  describe "situacoes" do
    alias Podsec.Posts.Situacao

    import Podsec.PostsFixtures

    @invalid_attrs %{descricao: nil}

    test "list_situacoes/0 returns all situacoes" do
      situacao = situacao_fixture()
      assert Posts.list_situacoes() == [situacao]
    end

    test "get_situacao!/1 returns the situacao with given id" do
      situacao = situacao_fixture()
      assert Posts.get_situacao!(situacao.id) == situacao
    end

    test "create_situacao/1 with valid data creates a situacao" do
      valid_attrs = %{descricao: "some descricao"}

      assert {:ok, %Situacao{} = situacao} = Posts.create_situacao(valid_attrs)
      assert situacao.descricao == "some descricao"
    end

    test "create_situacao/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Posts.create_situacao(@invalid_attrs)
    end

    test "update_situacao/2 with valid data updates the situacao" do
      situacao = situacao_fixture()
      update_attrs = %{descricao: "some updated descricao"}

      assert {:ok, %Situacao{} = situacao} = Posts.update_situacao(situacao, update_attrs)
      assert situacao.descricao == "some updated descricao"
    end

    test "update_situacao/2 with invalid data returns error changeset" do
      situacao = situacao_fixture()
      assert {:error, %Ecto.Changeset{}} = Posts.update_situacao(situacao, @invalid_attrs)
      assert situacao == Posts.get_situacao!(situacao.id)
    end

    test "delete_situacao/1 deletes the situacao" do
      situacao = situacao_fixture()
      assert {:ok, %Situacao{}} = Posts.delete_situacao(situacao)
      assert_raise Ecto.NoResultsError, fn -> Posts.get_situacao!(situacao.id) end
    end

    test "change_situacao/1 returns a situacao changeset" do
      situacao = situacao_fixture()
      assert %Ecto.Changeset{} = Posts.change_situacao(situacao)
    end
  end
end
