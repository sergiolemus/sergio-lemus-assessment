import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Movie } from "./Movie";
import { GENRES } from "../../constants/GENRES";

export const Movies = () => {
  const [genre, setGenre] = useState(28);
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
        endpoint.searchParams.set("sort_by", "popularity.desc");

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
  }, [genre]);

  const changeGenre = (event) => {
    setGenre(event.target.value);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <div>
        <label htmlFor="genre-select">Genre:</label>
        <select id="genre-select" value={genre} onChange={changeGenre}>
          {GENRES.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {movies.map(({ title, overview, poster_path }) => (
          <Movie title={title} overview={overview} img={poster_path} />
        ))}
      </div>
    </div>
  );
};
