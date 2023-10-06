import logo from "../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="nav">
      <img src={logo} alt="sunnyside" className="nav__logo" />
      <ul className="nav__links">
        <li className="nav__link">
          <a href="#">about</a>
        </li>
        <li className="nav__link">
          <a href="#">services</a>
        </li>
        <li className="nav__link">
          <a href="#">projects</a>
        </li>
        <li className="nav__link nav__contact">
          <a href="#">contact</a>
        </li>
      </ul>
      <button onClick={toggleSidebar} className="nav__toggle">
        <AiOutlineMenu />
      </button>
      {isSidebarOpen && <Sidebar />}
    </nav>
  );
};

export default Navbar;
