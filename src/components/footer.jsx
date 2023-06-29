import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with Love by &copy;Rachit Katiyar{" "}
          <a href="https://github.com/DareRac">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/rachit-katiyar-860595148/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
