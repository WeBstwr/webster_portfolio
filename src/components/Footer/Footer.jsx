import "./footer.css";
import today from "../../utils/date.js";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {today()}{" "}
        <a
          href="https://github.com/WeBstwr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webster Ifedha
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/webster-safala-9147a2245/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
