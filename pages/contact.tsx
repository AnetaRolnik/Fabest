import Container from "../components/layout/container/Container";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = (): JSX.Element => {
  return (
    <Container>
      <ContactHeader />
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
