import { useState, useEffect, useContext } from "react";

import SnackbarContext from "../../store/snackbar-context";
import Snackbar from "../ui/snackbar/Snackbar";
import scss from "./ContactForm.module.scss";

const sendContactData = async (contactDetails: {
  email: string;
  name: string;
  message: string;
}) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
};

const ContactForm = (): JSX.Element => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [eneteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const snackbarCtx = useContext(SnackbarContext);

  const activeSnackbar = snackbarCtx.snackbar;

  const sendMessageHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const body = {
      email: enteredEmail,
      name: eneteredName,
      message: enteredMessage,
    };

    try {
      await sendContactData(body);
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
      snackbarCtx.showSnackbar({
        status: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      snackbarCtx.showSnackbar({
        status: "error",
        message: "Something went wrong, please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={sendMessageHandler} className={scss.form}>
        <div className={scss.control}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
            className={scss.input}
          />
        </div>
        <div className={scss.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={eneteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            className={scss.input}
          />
        </div>
        <div className={scss.control}>
          <label htmlFor="message">Message*</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            className={`${scss.input} ${scss.textarea}`}
          />
        </div>
        <div className={scss.actions}>
          {!isLoading && <button className={scss.btn}>Send</button>}
          {isLoading && (
            <button className={scss.btn} disabled>
              Loading..
            </button>
          )}
        </div>
      </form>
      {activeSnackbar && (
        <Snackbar
          status={activeSnackbar.status}
          message={activeSnackbar.message}
        />
      )}
    </>
  );
};

export default ContactForm;
