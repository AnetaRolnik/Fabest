import Container from "../layout/container/Container";
import scss from "./Contact.module.scss";

const ContactForm = (): JSX.Element => {
  return (
    <Container>
      <h1>Contact me!</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required />
        </div>
        <button>Send Message</button>
      </form>
    </Container>
  );
};

export default ContactForm;
