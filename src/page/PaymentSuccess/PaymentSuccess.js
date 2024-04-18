import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { BiCheckCircle } from 'react-icons/bi';
import Particle from '../../components/Particle';

const PaymentSuccess = () => {
    const redirectToHome = () => {
        window.location.href = "/";
    };

    return (
        <Container fluid className="home-section z-0">
            <div className="vh-100 d-flex justify-content-center align-items-center z-3">
                <div className="card col-md-4 bg-white shadow-md p-5">
                    <div className="mb-4 text-center">
                        <BiCheckCircle className="text-success" size={75} />
                    </div>
                    <div className="text-center">
                        <h3>Thank You !</h3>
                        <p>Chúng tôi sẽ gửi chi tiết đơn hàng qua mail mà bạn đã cung cấp</p>
                        <Button variant="primary" onClick={redirectToHome}>Back Home</Button>
                    </div>
                </div>
            </div>
            <Particle />
        </Container>
    );
};

export default PaymentSuccess;
