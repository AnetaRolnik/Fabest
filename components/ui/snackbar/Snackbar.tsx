import scss from "./Snackbar.module.scss";

type Props = {
  status: string;
  message: string;
};

const Snackbar = ({ status, message }: Props): JSX.Element => {
  let statusClass = "";

  if (status === "success") {
    statusClass = scss.success;
  }

  if (status === "error") {
    statusClass = scss.error;
  }

  const classes = `${scss.snackbar} ${statusClass}`;

  return <div className={classes}>{message}</div>;
};

export default Snackbar;
