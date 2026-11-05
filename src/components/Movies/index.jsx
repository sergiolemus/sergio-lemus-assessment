import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Movie } from "./Movie";
import { GENRES, SORT, ORDER } from "../../constants/movies";

export const Movies = () => {
  const [genre, setGenre] = useState(28);
  const [sort, setSort] = useState("popularity");
  const [order, setOrder] = useState("desc");
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = new URL("https://api.themoviedb.org/3/discover/movie");

        endpoint.searchParams.set("api_key", process.env.API_KEY);
        endpoint.searchParams.set("page", 1);
        endpoint.searchParams.set("with_genres", genre);
        endpoint.searchParams.set("sort_by", `${sort}.${order}`);

        const res = await fetch(endpoint);

        if (!res.ok) throw new Error("Network error");

        const movies = await res.json();

        setMovies(movies.results);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genre, sort, order]);

  const changeGenre = (event) => {
    setGenre(event.target.value);
  };

  const changeSort = (event) => {
    setSort(event.target.value);
  };

  const changeOrder = (event) => {
    setOrder(event.target.value);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Movies</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="genre-select"
              className="text-sm font-medium text-gray-700"
            >
              Genre:
            </label>
            <select
              id="genre-select"
              value={genre}
              onChange={changeGenre}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {GENRES.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-select"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={changeSort}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SORT.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="order-select"
              className="text-sm font-medium text-gray-700"
            >
              Order By:
            </label>
            <select
              id="order-select"
              value={order}
              onChange={changeOrder}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ORDER.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {movies.map(({ id, title, overview, poster_path }) => (
          <Movie key={id} title={title} overview={overview} img={poster_path} />
        ))}
      </div>
    </div>
  );
};
