import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../../assets/img/contact-img.svg";
import contactImg from "../../assets/img/contact/satellite.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({});
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_f8n8pne', 'template_m87dzq9', form.current, {
                publicKey: 'OLwb86zw7RgFZEfN7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setButtonText('Success!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setButtonText('Failed!')
                },
            );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div >
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={12} className="px-1">
                                                <input type="text" placeholder="Name" name="user_name" />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" placeholder="Email Address" name="user_email" />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" placeholder="Phone No." name="user_phone" />
                                            </Col>
                                            <Col size={12} sm={12} className="px-1">
                                                <textarea rows="6" placeholder="Message" name="message"></textarea>
                                                <button type="submit" style={{width: "100%", margin: "0"}}><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
