import { useState, useContext } from "react";

import SnackbarContext from "../../store/snackbar-context";
import Snackbar from "../ui/snackbar/Snackbar";
import FormControl from "../ui/form-control/FormControl";
import Textarea from "../ui/textarea/Textarea";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { ContactData } from "../../types/contact";
import scss from "./ContactForm.module.scss";

const sendContactData = async (contactDetails: ContactData) => {
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
        <FormControl>
          <label htmlFor="email">Email*</label>
          <Input
            type="email"
            name="email"
            id="email"
            required={true}
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            value={eneteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="message">Message*</label>
          <Textarea
            name="message"
            id="message"
            required={true}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </FormControl>
        <div className={scss.actions}>
          {!isLoading && <Button>Send</Button>}
          {isLoading && <Button disabled={true}>Loading...</Button>}
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
