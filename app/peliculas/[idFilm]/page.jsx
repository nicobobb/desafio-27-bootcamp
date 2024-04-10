import React from "react";
import apiFilm from "@/utils/apiFilm";
import Image from "next/image";

const FilmPage = async ({ params }) => {
  const film = await apiFilm(params.idFilm);
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{film.title}</h1>
      <h2 className="text-xl">{film.tagline}</h2>
      <p className="text-gray-600 mb-4">
        <strong>Nombre original:</strong> {film.original_title}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Popularidad:</strong> {film.popularity}
      </p>
      <Image
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt={film.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "300px",
          margin: "auto",
        }}
      />
      <p className="mt-4 text-gray-700">{film.overview}</p>
    </div>
  );
};

export default FilmPage;
