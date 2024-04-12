import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
import Particle from '../../components/Particle';
import TripTicket from '../../components/Search/tripTicket';
import ReturnTicket from '../../components/Search/returnTicket';
import BookFormMini from '../../components/Table/BookFormMini';

const SearchPage = () => {
    // const location = useLocation();
    // const formData = location.state?.formData;
    const [isChuyenDi, setIsChuyenDi] = useState(true);

    // Hàm xử lý khi người dùng chọn chuyến đi
    const handleChuyenDiClick = () => {
        setIsChuyenDi(true);
    };

    // Hàm xử lý khi người dùng chọn chuyến về
    const handleChuyenVeClick = () => {
        setIsChuyenDi(false);
    };

    return (
        <Container fluid className="project-section">
            <Container>
                <div className="row">
                    {/* Left col */}
                    <div className='col-md-4 col-12'>
                        <h1 className="project-heading">
                            <strong className="purple">Search Ticket</strong>
                        </h1>
                        <BookFormMini />
                    </div>
                    {/* Right col */}
                    <div className='col-md-8 col-12'>
                        <div className="row mb">
                            <div className="col-md-6 col-12 mb-3">
                                <button id="btn-check-chuyendi" className={`border btn ${isChuyenDi ? 'btn-primary' : 'btn-light'} form-control`} onClick={handleChuyenDiClick}>Chuyến đi</button>
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <button id="btn-check-chuyenve" className={`border btn ${!isChuyenDi ? 'btn-primary' : 'btn-light'} form-control`} onClick={handleChuyenVeClick}> Chuyến về</button>
                            </div>
                        </div>
                        {isChuyenDi ? <TripTicket /> : <ReturnTicket />}
                    </div>
                </div>
            </Container>
            <Particle />
        </Container>
    );
};

export default SearchPage;
