defmodule Podsec.PostsNewsTest do
  use Podsec.DataCase

  alias Podsec.PostsNews

  describe "noticias" do
    alias Podsec.PostsNews.Noticias

    import Podsec.PostsNewsFixtures

    @invalid_attrs %{assunto: nil, assuntocomplemento: nil, tags: nil, titulo: nil, url: nil}

    test "list_noticias/0 returns all noticias" do
      noticias = noticias_fixture()
      assert PostsNews.list_noticias() == [noticias]
    end

    test "get_noticias!/1 returns the noticias with given id" do
      noticias = noticias_fixture()
      assert PostsNews.get_noticias!(noticias.id) == noticias
    end

    test "create_noticias/1 with valid data creates a noticias" do
      valid_attrs = %{assunto: "some assunto", assuntocomplemento: "some assuntocomplemento", tags: "some tags", titulo: "some titulo", url: "some url"}

      assert {:ok, %Noticias{} = noticias} = PostsNews.create_noticias(valid_attrs)
      assert noticias.assunto == "some assunto"
      assert noticias.assuntocomplemento == "some assuntocomplemento"
      assert noticias.tags == "some tags"
      assert noticias.titulo == "some titulo"
      assert noticias.url == "some url"
    end

    test "create_noticias/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostsNews.create_noticias(@invalid_attrs)
    end

    test "update_noticias/2 with valid data updates the noticias" do
      noticias = noticias_fixture()
      update_attrs = %{assunto: "some updated assunto", assuntocomplemento: "some updated assuntocomplemento", tags: "some updated tags", titulo: "some updated titulo", url: "some updated url"}

      assert {:ok, %Noticias{} = noticias} = PostsNews.update_noticias(noticias, update_attrs)
      assert noticias.assunto == "some updated assunto"
      assert noticias.assuntocomplemento == "some updated assuntocomplemento"
      assert noticias.tags == "some updated tags"
      assert noticias.titulo == "some updated titulo"
      assert noticias.url == "some updated url"
    end

    test "update_noticias/2 with invalid data returns error changeset" do
      noticias = noticias_fixture()
      assert {:error, %Ecto.Changeset{}} = PostsNews.update_noticias(noticias, @invalid_attrs)
      assert noticias == PostsNews.get_noticias!(noticias.id)
    end

    test "delete_noticias/1 deletes the noticias" do
      noticias = noticias_fixture()
      assert {:ok, %Noticias{}} = PostsNews.delete_noticias(noticias)
      assert_raise Ecto.NoResultsError, fn -> PostsNews.get_noticias!(noticias.id) end
    end

    test "change_noticias/1 returns a noticias changeset" do
      noticias = noticias_fixture()
      assert %Ecto.Changeset{} = PostsNews.change_noticias(noticias)
    end
  end
end
