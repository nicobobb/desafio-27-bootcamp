import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardFilm = ({ film }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:border-2">
      <Link href={`/peliculas/${film.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          alt={film.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="pt-4">
          <p className="font-bold">{film.title}</p>
          <p>{film.overview.substring(0, 80)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default CardFilm;
