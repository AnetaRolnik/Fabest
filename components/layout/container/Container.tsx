import scss from "./Container.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
  styleName?: string;
};

const Container = (props: Props): JSX.Element => {
  const classes = [`${scss.container}`, `${props.styleName}`].join(" ");
  return <div className={classes}>{props.children}</div>;
};

export default Container;
