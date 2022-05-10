defmodule Podsec.Posts do
  @moduledoc """
  The Posts context.
  """

  import Ecto.Query, warn: false
  alias Podsec.Repo

  alias Podsec.Posts.Situacao

  @doc """
  Returns the list of situacoes.

  ## Examples

      iex> list_situacoes()
      [%Situacao{}, ...]

  """
  def list_situacoes do
    Repo.all(Situacao)
  end

  @doc """
  Gets a single situacao.

  Raises `Ecto.NoResultsError` if the Situacao does not exist.

  ## Examples

      iex> get_situacao!(123)
      %Situacao{}

      iex> get_situacao!(456)
      ** (Ecto.NoResultsError)

  """
  def get_situacao!(id), do: Repo.get!(Situacao, id)

  @doc """
  Creates a situacao.

  ## Examples

      iex> create_situacao(%{field: value})
      {:ok, %Situacao{}}

      iex> create_situacao(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_situacao(attrs \\ %{}) do
    %Situacao{}
    |> Situacao.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a situacao.

  ## Examples

      iex> update_situacao(situacao, %{field: new_value})
      {:ok, %Situacao{}}

      iex> update_situacao(situacao, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_situacao(%Situacao{} = situacao, attrs) do
    situacao
    |> Situacao.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a situacao.

  ## Examples

      iex> delete_situacao(situacao)
      {:ok, %Situacao{}}

      iex> delete_situacao(situacao)
      {:error, %Ecto.Changeset{}}

  """
  def delete_situacao(%Situacao{} = situacao) do
    Repo.delete(situacao)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking situacao changes.

  ## Examples

      iex> change_situacao(situacao)
      %Ecto.Changeset{data: %Situacao{}}

  """
  def change_situacao(%Situacao{} = situacao, attrs \\ %{}) do
    Situacao.changeset(situacao, attrs)
  end

  alias Podsec.PostsAudio.Podcast

  def get_all() do
    Repo.all Podcast
  end
end
