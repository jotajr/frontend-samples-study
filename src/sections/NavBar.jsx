import { SambaWitheLogo } from "../assets/images";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <nav className="padding-x py-5 flex items-center justify-between">
        <div className="flex gap-5 font-montserrat">
          <a href="/">Home</a>
          <a href="/">Menu</a>
        </div>
        <div>
          <img src={SambaWitheLogo} alt="Samba Logo" height={50} width={100} />
        </div>
        <div className="flex gap-2 text-2xl">
          <a href="https://www.instagram.com/samba_eatery/">
            <FaInstagram />
          </a>
          <FaWhatsapp />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
