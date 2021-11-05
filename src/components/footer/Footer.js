import React from "react";
import './footer.css'
const Footer = ({theme}) => {


  return (
    <div className={theme === "dark" ? "FooterContainer" : "FooterContainerActive"}>
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <ul className={theme === "dark" ? "FooterLinkItems" : "FooterLinkItemsActive"}>
              <h1 className={theme === "dark" ? "FooterLinkTitle" : "FooterLinkTitleActive"}>About</h1>
              <a href="#home"><li className="FooterLink">Home</li></a>
              <a href="#services"><li className="FooterLink">Services</li></a>
              <a href="#portfolio"><li className="FooterLink">Portfolio</li></a>
              <a href="#testimonials"><li className="FooterLink">Testimonails</li></a>
              <a href="#contact"><li className="FooterLink">Contact</li></a>
            </ul>
            <div className="FooterLinkItems">
              <h1 className={theme === "dark" ? "FooterLinkTitle" : "FooterLinkTitleActive"}>My Mission</h1>
              <p className="FooterQuote" >Code the Matrix</p> 
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <ul className="FooterLinkItems">
              <h1 className={theme === "dark" ?"FooterLinkTitle" : "FooterLinkTitleActive"}>Privacy</h1>
              <li className="FooterLink">Terms</li>
              <li className="FooterLink">Sitemap</li>
              <small className="WebsiteRights">areciocodes © {new Date().getFullYear()} All Rights Reserved.</small>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  );
};

 
export default Footer;