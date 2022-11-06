import scss from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={scss.footer}>
      <p>Copyright {currentYear} Fabest</p>
    </footer>
  );
};

export default Footer;
