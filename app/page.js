import Link from "next/link";
export default function Home() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://s1.elespanol.com/2017/01/27/actualidad/actualidad_189245206_129755622_1706x960.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Encuentra las mejores películas en un mismo lugar
              </h2>

              <p className="mt-4 text-gray-600">
                Desde clásicos atemporales hasta emocionantes estrenos, nuestro
                catálogo abarca una variedad de géneros que prometen capturar la
                atención de cada miembro de la familia.
              </p>

              <Link
                href="/peliculas"
                className="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white"
              >
                Ver Catálogo ➜
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
