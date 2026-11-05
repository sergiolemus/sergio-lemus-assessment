import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = new URL(" https://api.themoviedb.org/3/discover/movie");

      endpoint.searchParams.set("api_key", process.env.API_KEY);
      endpoint.searchParams.set("page", 1);

      const res = await fetch(endpoint);
      const movies = await res.json();

      setMovies(movies.results);
    };

    fetchMovies();
  }, []);

  return <div>{JSON.stringify(movies)}</div>;
};

export default App;
