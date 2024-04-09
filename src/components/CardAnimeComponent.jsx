import { getGenreAnimeMovieService } from "@/services/movie.service";
import React from "react";

const CardAnimeComponent = async () => {
  const animeMovies = await getGenreAnimeMovieService("Anime");
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex flex-nowrap">
        {animeMovies.payload.map((data) => (
          <a
            key={data.movie_id}
            className="ml-10 p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl flex flex-col items-center bg-white cursor-pointer"
            style={{ minWidth: "500px", maxWidth: "800px" }}
            href={`/view-movie-details/${data.movie_id}`}
          >
            <img src={data.image} className="shadow overflow-hidden border" />
            <div className="mt-8">
              <h4 className="font-bold text-xl line-clamp-1">
                {data.movie_title}
              </h4>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {data.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardAnimeComponent;
