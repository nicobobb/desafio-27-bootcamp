import React from "react";

const CardFilm = ({ film }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt={film.title}
        className="w-full h-auto rounded-md"
      />
      <div className="mt-4">
        <p className="font-bold">{film.title}</p>
        <p>{film.overview.substring(0, 80)}...</p>
      </div>
    </div>
  );
};

export default CardFilm;
