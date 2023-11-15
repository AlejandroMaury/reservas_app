import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-indigo-400 min-w-max text-white py-1">
        <div
          className="  
         flex justify-between items-center"
        >
          <ul className=" flex justify-items-center gap-10 m-auto">
            <li>
              <Link
                href="/"
                className="text-white font-bold hover:text-yellow-600"
              >
                Home
              </Link>
            </li>
          </ul>
          <p className="mr-3 text-yellow-300 text-end text-xs">
            hecho con pasión . . .
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
