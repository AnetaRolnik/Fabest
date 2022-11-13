import scss from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = (props: Props): JSX.Element => {
  const { children, disabled, onClick } = props;

  return (
    <button className={scss.btn} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
