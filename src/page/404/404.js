import React from "react";
import Particle from "../../components/Particle";
import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <Container fluid className="home-section">
            <Particle />
            <h1 className="pruple mt-5 text-light">Oops, không thể tìm thấy trang. Trở về
                <router-link to="/"> trang chủ.</router-link>
            </h1>
        </Container>
    )
}

export default NotFound;