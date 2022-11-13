import scss from "./FormControl.module.scss";

type Props = {
  children: React.ReactNode;
};

const FormControl = (props: Props): JSX.Element => {
  return <div className={scss.control}>{props.children}</div>;
};

export default FormControl;
