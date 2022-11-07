import { use, useState } from "react";

import Container from "../layout/container/Container";
import scss from "./Contact.module.scss";

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
    <Container>
      <h1>Contact me!</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={eneteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <button>Send Message</button>
      </form>
    </Container>
  );
};

export default ContactForm;
