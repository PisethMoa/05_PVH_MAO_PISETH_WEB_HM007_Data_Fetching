import { getMovieServiceById } from "@/services/movie.service";
import React from "react";
import StarRating from "./StarRating";

const MovieDetails = async ({ params }) => {
  const data = await getMovieServiceById(params.movieId);
  const rating = Math.round(data.payload.rating);
  const postedDate = new Date(data?.payload?.posted_at);
  const formattedDate =
    postedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) +
    ", " +
    postedDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  return (
    <div className="bg-amber-950 pt-24 h-screen text-white">
      <div className="bg-transparent dark:bg-gray-800 py-8">
        <div className=" px-4">
          <div className="flex flex-row -mx-4 ">
            <div className="w-[70%] h-[700px] ml-10">
              <div className="h-full bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={
                    data.payload.image == ""
                      ? "../images/default_image.jpg"
                      : data.payload.image
                  }
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold dark:text-white">
                {data.payload.director}
              </h2>
              <p className="dark:text-gray-300 text-sm">
                {data.payload.runtime} minutes
              </p>
              <i className="dark:text-gray-300 text-sm">{data.payload.genre}</i>
              <div>
                <StarRating rating={rating} />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white mt-10">
                  {data.payload.movie_title} ({data.payload.released_year})
                </h2>
                <p className="dark:text-gray-300 text-sm">
                  {data.payload.description}
                </p>
              </div>
              <p className="mt-20">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
