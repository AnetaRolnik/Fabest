import scss from "./Container.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = (props: Props): JSX.Element => {
  return <div className={scss.container}>{props.children}</div>;
};

export default Container;
