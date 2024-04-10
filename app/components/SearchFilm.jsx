"use client";

import React, { useState } from "react";
import api from "@/utils/api";
import ListCardFilms from "@/app/components/ListCardFilms";

const SearchFilm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [films, setFilms] = useState([]);

  const searchFilms = async () => {
    try {
      const data = await api(searchTerm);
      setFilms(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      searchFilms();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="my-8">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-[#374151] text-white rounded-lg"
        >
          Buscar
        </button>
      </form>
      <ListCardFilms films={films} />
    </>
  );
};

export default SearchFilm;
