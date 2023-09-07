import Link from "next/link";
import ColorScheme from "./ColorScheme";

function NavBar() {
  return (
    <div
      className={`font-medium w-full h-max sm:px-14 px-6 py-6 flex justify-between items-center bg-Blue`}
    >
      <Link className="text-xl" href="/">
        What in the world
      </Link>
      <ColorScheme />
    </div>
  );
}

export default NavBar;
