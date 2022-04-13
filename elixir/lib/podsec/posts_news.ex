defmodule Podsec.PostsNews do
  @moduledoc """
  The PostsNews context.
  """

  import Ecto.Query, warn: false
  alias Podsec.Repo

  alias Podsec.PostsNews.Noticias

  @doc """
  Returns the list of noticias.

  ## Examples

      iex> list_noticias()
      [%Noticias{}, ...]

  """
  def list_noticias do
    Repo.all(Noticias)
  end

  @doc """
  Gets a single noticias.

  Raises `Ecto.NoResultsError` if the Noticias does not exist.

  ## Examples

      iex> get_noticias!(123)
      %Noticias{}

      iex> get_noticias!(456)
      ** (Ecto.NoResultsError)

  """
  def get_noticias!(id), do: Repo.get!(Noticias, id)

  @doc """
  Creates a noticias.

  ## Examples

      iex> create_noticias(%{field: value})
      {:ok, %Noticias{}}

      iex> create_noticias(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_noticias(attrs \\ %{}) do
    %Noticias{}
    |> Noticias.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a noticias.

  ## Examples

      iex> update_noticias(noticias, %{field: new_value})
      {:ok, %Noticias{}}

      iex> update_noticias(noticias, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_noticias(%Noticias{} = noticias, attrs) do
    noticias
    |> Noticias.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a noticias.

  ## Examples

      iex> delete_noticias(noticias)
      {:ok, %Noticias{}}

      iex> delete_noticias(noticias)
      {:error, %Ecto.Changeset{}}

  """
  def delete_noticias(%Noticias{} = noticias) do
    Repo.delete(noticias)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking noticias changes.

  ## Examples

      iex> change_noticias(noticias)
      %Ecto.Changeset{data: %Noticias{}}

  """
  def change_noticias(%Noticias{} = noticias, attrs \\ %{}) do
    Noticias.changeset(noticias, attrs)
  end
end
