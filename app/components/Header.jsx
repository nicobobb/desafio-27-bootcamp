import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Inicio</span>
                <svg
                  className="h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM15 6H9C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V7C16 6.44772 15.5523 6 15 6ZM10 8H14V16H10V8Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-white transition " href="/">
                      Inicio
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition " href="/peliculas">
                      Peliculas
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
