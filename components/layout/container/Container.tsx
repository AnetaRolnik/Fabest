import scss from "./Container.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
  isGap?: boolean;
};

const Container = (props: Props): JSX.Element => {
  const classes = `${scss.container} ${props.isGap ? scss.margin : ""}`;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
