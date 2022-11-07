import { useState } from "react";

import scss from "./ContactForm.module.scss";

const ContactForm = (): JSX.Element => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [eneteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendMessageHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const body = {
      email: enteredEmail,
      name: eneteredName,
      message: enteredMessage,
    };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <form onSubmit={sendMessageHandler} className={scss.form}>
      <div className={scss.control}>
        <label htmlFor="email">Email</label>
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
        <label htmlFor="message">Message</label>
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
        <button className={scss.btn}>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
