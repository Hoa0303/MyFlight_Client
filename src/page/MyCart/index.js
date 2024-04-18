import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../../components/Particle';

import OrderList from '../../components/Cart/OrderList';
import ProfileList from '../../components/Cart/Profile';

const CartPage = () => {

    return (
        <Container fluid className="project-section">
            <Container>
                <div className='row'>
                    <div className='col-4 h-100'>
                        <ProfileList />
                    </div>
                    <div className='col-8'>
                        <h2 className='purple'>Vé đã đặt</h2>
                        <OrderList />
                    </div>
                </div>
            </Container>
            <Particle />
        </Container>
    );
};

export default CartPage;
