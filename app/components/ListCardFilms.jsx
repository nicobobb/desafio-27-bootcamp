import CardFilm from "@/app/components/CardFilm";
const ListCardFilms = ({ films }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {films && films.map((film) => <CardFilm film={film} key={film.id} />)}
      </div>
    </>
  );
};

export default ListCardFilms;
