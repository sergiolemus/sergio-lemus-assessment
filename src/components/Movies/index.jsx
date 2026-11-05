import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = new URL(
          " https://api.themoviedb.org/3/discover/movie",
        );

        endpoint.searchParams.set("api_key", process.env.API_KEY);
        endpoint.searchParams.set("page", 1);
        endpoint.searchParams.set("with_genres", 28);
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
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return <div>{JSON.stringify(movies)}</div>;
};
