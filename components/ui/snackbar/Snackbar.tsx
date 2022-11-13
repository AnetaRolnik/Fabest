import ReactDom from "react-dom";

import { Snackbar } from "../../../types/snackbar";
import scss from "./Snackbar.module.scss";

const Snackbar = ({ status, message }: Snackbar): JSX.Element => {
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
