import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Particle from '../../components/Particle';
import Cookies from 'js-cookie';

import Trip from '../../components/Book/Trip';
import Return from '../../components/Book/Return';
import SeatTrip from '../../components/Book/BookSeatTrip';
import SeatReturn from '../../components/Book/BookSeatRetrun';

const BookPage = () => {
    const navigate = useNavigate();
    const [isTripSelected, setIsTripSelected] = useState(true);
    const [isReturnSelected, setIsReturnSelected] = useState(false);
    const [selectedTripTickets, setSelectedTripTickets] = useState([]);
    const [selectedReturnTickets, setSelectedReturnTickets] = useState([]);
    const userID = Cookies.get('userID');
    let TripTicket = '';
    let ReturnTicket = '';

    const handleTripSelect = () => {
        setIsTripSelected(true);
        setIsReturnSelected(false);
    };

    const handleReturnSelect = () => {
        setIsReturnSelected(true);
        setIsTripSelected(false);
    };

    const updateSelectedTripTickets = (tickets) => {
        setSelectedTripTickets(tickets);
    };

    const updateSelectedReturnTickets = (tickets) => {
        setSelectedReturnTickets(tickets);
    }

    const handleCheckSelectedTickets = () => {
        // Lưu trữ giá trị selectedTripTickets vào biến TripTicket
        TripTicket = selectedTripTickets;
        ReturnTicket = selectedReturnTickets;
        const Data = { userID, TripTicket, ReturnTicket };
        // console.log(Data);
        // Hoặc thực hiện các thao tác khác tùy theo yêu cầu của bạn
        navigate('/checkout', { state: { formData: Data } });
    };

    return (
        <Container fluid className="project-section">
            <Container>
                <div className='row'>
                    <div className='col-9'>
                        <div onClick={handleTripSelect} className='pointer'>
                            <h3 className='purple text-start ms-3'>Chiều đi:</h3>
                            <Trip />
                        </div>
                        <div onClick={handleReturnSelect} className='pointer'>
                            <h3 className='purple text-start ms-3'>Chiều về:</h3>
                            <Return />
                        </div>
                    </div>
                    {isTripSelected && (
                        <div className='col-3 custom-border h-100'>
                            <h1 className='purple'>Ghế chiều đi</h1>
                            <SeatTrip updateTickets={updateSelectedTripTickets} />
                        </div>
                    )}
                    {isReturnSelected && (
                        <div className='col-3 custom-border h-100'>
                            <h1 className='purple'>Ghế chiều về</h1>
                            <SeatReturn updateTickets={updateSelectedReturnTickets} />
                            <div className='d-flex justify-content-center'>
                                <div className='col-12'>
                                    <Button onClick={handleCheckSelectedTickets}>Đến trang thanh toán</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Particle />
        </Container>
    );
};

export default BookPage;
