import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import footerLogo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="sunnyside" className="footer__logo" />
      <ul className="footer__links">
        <li className="footer__link">
          <a href="#">about</a>
        </li>
        <li className="footer__link">
          <a href="#">services</a>
        </li>
        <li className="footer__link">
          <a href="#">projects</a>
        </li>
      </ul>
      <div className="social__links">
        <a className="social__link" href="#">
          <AiFillFacebook />
        </a>
        <a className="social__link" href="#">
          <AiOutlineInstagram />
        </a>
        <a className="social__link" href="#">
          <AiOutlineTwitter />
        </a>
        <a className="social__link" href="#">
          <BsPinterest />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
