import ReactDom from "react-dom";

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

  const portalDiv = document.getElementById("notifications")!;

  return ReactDom.createPortal(
    <div className={classes}>{message}</div>,
    portalDiv
  );
};

export default Snackbar;
