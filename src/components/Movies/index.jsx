import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const endpoint = new URL(
          " https://api.themoviedb.org/3/discover/movie",
        );

        endpoint.searchParams.set("api_key", process.env.API_KEY);
        endpoint.searchParams.set("page", 1);

        const res = await fetch(endpoint);
        const movies = await res.json();

        setMovies(movies.results);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <Loading />;

  return <div>{JSON.stringify(movies)}</div>;
};
