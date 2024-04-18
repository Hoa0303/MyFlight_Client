import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../../components/Particle';
import CheckoutForm from '../../components/Book/CheckoutForm';

const CheckoutPage = () => {

    return (
        <Container fluid className="project-section">
            <Container>
                <div className='row'>
                    <div className='m-5'>
                        {/* Truyền dữ liệu formData vào component CheckoutForm */}
                        <CheckoutForm />
                    </div>
                </div>
            </Container>
            <Particle />
        </Container>
    );
};

export default CheckoutPage;
