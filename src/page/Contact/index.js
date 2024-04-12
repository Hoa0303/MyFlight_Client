import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../components/Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const ContactForm = () => {
    return (
        <Container fluid className="project-section">
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
                </div>
            </div>
            <Particle />
        </Container>
    );
};

export default ContactForm;