import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <p className="contact-wrapper__text">{cta}</p>
          </Fade>
          <Fade bottom duration={1000} delay={750} distance="30px">
            <ContactForm />
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
