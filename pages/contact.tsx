import Head from "next/head";

import Container from "../components/layout/container/Container";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="If you are interested in cooperation or a career in Febest, please send me a message."
        />
      </Head>
      <Container>
        <ContactHeader />
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
