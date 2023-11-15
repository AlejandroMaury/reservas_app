import Link from "next/link";

function Nabvar() {
  return (
    <>
      <nav className="bg-zinc-900 max-w-full text-white py-3 mb-2">
        <div
          className="container ml-10 
         flex justify-between items-center"
        >
          <Link href="/">
            <h3 className="text-3xl">App-oipments</h3>
          </Link>

          <ul className=" flex justify-between  gap-3 mr-2">
            <li>
              <Link
                href="/reservas"
                className="text-sky-500 hover:text-sky-400"
              >
                Reservas
              </Link>
            </li>
            <li>
              <Link href="/canchas" className="text-sky-500 hover:text-sky-400">
                Canchas
              </Link>
            </li>
            <li>
              <Link href="/perfil" className="text-sky-500 hover:text-sky-400">
                Perfil
              </Link>
            </li>
            <li>
              <Link href="/tienda" className="text-sky-500 hover:text-sky-400">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sky-500 hover:text-sky-400">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-sky-500 hover:text-sky-400"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/deportes"
                className="text-sky-500 hover:text-sky-400"
              >
                Deportes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nabvar;
