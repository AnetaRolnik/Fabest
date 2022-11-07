import scss from "./ContactHeader.module.scss";

const ContactHeader = (): JSX.Element => {
  return (
    <div className={scss.header}>
      <h1 className={scss.title}>Contact</h1>
      <p className={scss.text}>
        If you are interested in cooperation or a career in Febest, please
        contact me!
      </p>
    </div>
  );
};

export default ContactHeader;
