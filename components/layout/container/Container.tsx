import scss from "./Container.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props): JSX.Element => {
  const classes = `${scss.container} ${className}`;
  return <div className={className ? classes : scss.container}>{children}</div>;
};

export default Container;
