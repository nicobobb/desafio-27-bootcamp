import ListOfDiscoversFilms from "@/app/components/ListOfDiscoversFilms";
import SearchFilm from "../components/SearchFilm";

const Peliculas = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SearchFilm />
      <ListOfDiscoversFilms />
    </div>
  );
};

export default Peliculas;
