import React from "react";
import TemplateMovieListPage from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";


const TrendingMoviesPage: React.FC = () => {
  const { data: trendingMovies, isLoading, isError } = useQuery(["trendingMovies"], getTrendingMovies);

  if (isLoading) return <p>Loading trending movies...</p>;
  if (isError) return <p>Error fetching trending movies. Please try again.</p>;

  return (
     <TemplateMovieListPage
      title="Trending Movies"
      movies={trendingMovies?.results || []}
      action={() => <></>} // No icon/action, just an empty fragment
    />
  );
};

export default TrendingMoviesPage;
