import "./footer.css";
import today from "../../utils/date.js";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {today()}{" "}
        <a href="https://github.com/WeBstwr" target="_blank">
          Webster Ifedha|
          <a
            href="https://www.linkedin.com/in/webster-safala-9147a2245/"
            target="_blank"
          >
            Linkedin
          </a>
        </a>{" "}
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
