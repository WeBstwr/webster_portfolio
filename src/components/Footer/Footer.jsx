import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear}{" "}
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
    </footer>
  );
};

export default Footer;
