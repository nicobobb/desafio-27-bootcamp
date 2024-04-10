import apiDiscover from "@/utils/apiDiscover";
import ListCardFilms from "./ListCardFilms";

const ListOfDiscoversFilms = async () => {
  const data = await apiDiscover();
  const films = data.results;

  return (
    <>
      <ListCardFilms films={films} />
    </>
  );
};

export default ListOfDiscoversFilms;
