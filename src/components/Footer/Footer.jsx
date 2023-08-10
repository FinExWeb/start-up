import React from "react";
import "./footer.css";
import Logo from "../Navbar/navbar-icons/Brend.svg";
import instagram from "./icon/instagram.svg";
import ins from "./icon/in.svg";
import facebook from "./icon/facebook.svg";
import twitter from "./icon/twitter.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="brend">
          <img src={Logo} alt="Logo" />
        </div>
        <hr className="my-4" />
        <hr className="my-4" />
        <div className="social-media my-3">
          <img src={instagram} alt="instagram" />
          <img src={ins} alt="ins" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
        <p className="my-4">
          © 2023 STAR-BURGER. Barcha ma’lumotlar himoya qilinadi!
        </p>
      </div>
    </>
  );
}

export default Footer;
