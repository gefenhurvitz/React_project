import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
faFacebook,faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

const MyFooter = () => {
  return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">

            <a 
            href={"https://www.facebook.com/gefen.hurvitznew/"}
            className={"btn btn-outline-light btn-floating m-1 btn-lg"}>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>            
            </a>
            
            <a
            href={"https://www.instagram.com/gefenhurvitz/"}
            className={"btn btn-outline-light btn-floating m-1 btn-lg"}>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>


            <a href={"https://www.linkedin.com/in/gefen-hurvitz-b7391b234/"}
            className={"btn btn-outline-light btn-floating m-1 btn-lg "}>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>

            
            <a href={"https://wa.me/972523431188"}
            className={"btn btn-outline-light btn-floating m-1 btn-lg "}>
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>

            <a href={"https://github.com/gefenhurvitz"}
            className={"btn btn-outline-light btn-social m-1 btn-lg"}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>

          </section>
        </div>
        <div className="text-center p-3" >
          <h5>© 1999-2022 Copyright:   </h5>
          <a className="text-white" href="https://gefenhurvitz.com/"> Gefen Hurvitz  </a>
        </div>
      </footer>
  );
};

export default MyFooter;
