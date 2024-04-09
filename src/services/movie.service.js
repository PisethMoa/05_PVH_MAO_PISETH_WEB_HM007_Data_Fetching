export async function getAllMovieService() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", {
    cache: "no-store",
  });
  const data = res.json();
  return data;
}
export async function getGenreActionMovieService(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
export async function getGenreDramaMovieService(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
export async function getGenreScienceFictionMovieService(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
export async function getGenreHollywoodMovieService(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
export async function getGenreAnimeMovieService(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
export async function getMovieServiceById(movie_id) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
