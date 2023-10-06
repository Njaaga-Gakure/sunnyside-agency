import Navbar from "./Navbar";
import arrow from "../assets/icon-arrow-down.svg";
const Hero = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="hero">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="hero__body">
        <h2 className="hero__tagline">we are creatives</h2>
        <img className="hero__icon" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Hero;
