// rafce

import DropdownListManu from "./DropdownListManu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div
        className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4"
      >
        <Logo />
        <Searchbar />
        <DropdownListManu />
      </div>
    </nav>
  );
};
export default Navbar;
