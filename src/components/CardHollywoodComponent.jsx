import { getGenreHollywoodMovieService } from "@/services/movie.service";
import React from "react";

const CardHollywoodComponent = async () => {
  const hollywoodMovies = await getGenreHollywoodMovieService("Hollywood");
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap">
        {hollywoodMovies.payload.map((data) => (
          <a
            key={data.movie_id}
            className="ml-10 p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl flex flex-col items-center bg-white cursor-pointer"
            style={{ minWidth: "300px", maxWidth: "500px" }}
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

export default CardHollywoodComponent;
