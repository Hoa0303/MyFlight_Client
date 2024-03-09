import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../components/Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const ContactForm = () => {
    return (
        <Container fluid className="home-section z-0">
            <Particle />
            <div className="container mt-4 mb-4">
                <h1 className="project-heading">
                    <strong className="purple">Sends us a Message</strong>
                </h1>

                <div className="container">
                    <div className="row mb-4">
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabelSm" placeholder="Name" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabelSm" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <textarea className="form-control form-control-lg" rows="5" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-3"><button className="btn btn-primary">Send Message</button></div>
                    </div>

                    <iframe src="https://maps.google.com/maps?q=T%C3%A2n%20k%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" className="mb-5" width="100%" height="500" frameBorder="0" style={{ border: '0' }} scrolling="no" marginHeight="0" marginWidth="0"></iframe>

                </div>
            </div>
        </Container>
    );
};

export default ContactForm;