import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import ListTicket from './TicketList';

const OrderList = () => {
    const [listOrder, setList] = useState([]);
    const [showTickets, setShowTickets] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const List = await axios.get(`http://localhost:3000/api/bookticket/`);
                const index = List.data.filter(i => i.UserId === Cookies.get('userID'));
                setList(index);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();

    }, []);

    const handleToggleTickets = () => {
        setShowTickets(!showTickets);
    };

    const handleCancelTickets = async (id) => {
        const response = await axios.put(`http://localhost:3000/api/bookticket/req/${id}`);
        console.log(response);
        window.location.reload();
    }

    return (
        <Container>
            <div className='container'>
                {listOrder.map(route => (
                    <div key={route._id} className="row text-white mb-5 custom-border">
                        <div className="col-12">
                            {showTickets && route.Tickets.map((ticketId, index) => (
                                <div key={index}>
                                    <p className='purple text-start'>Vé {index + 1}:</p>
                                    <ListTicket key={ticketId} ticketId={ticketId} />
                                </div>
                            ))}
                            <div className='row'>
                                <h5 className='col-4 text-start'>Ngày đặt vé: <span className='purple'>{route.date}</span></h5>
                                <Button className='col-4' variant="primary" onClick={handleToggleTickets}>Xem danh sách vé đã đặt</Button>
                                <div className='row col-4'>
                                    <p className='text-end'>
                                        <span className={route.status === 'Đang đợi duyệt' ? 'text-warning' : (route.status === 'Đã duyệt' ? 'text-success' : 'text-danger')}>
                                            Trạng thái: {route.status}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <Button
                                style={{ float: 'right', marginRight: '10px' }}
                                variant="danger"
                                disabled={route.status !== 'Đang đợi duyệt'}
                                onClick={() => {
                                    if (window.confirm('Bạn có chắc muốn yêu cầu hủy vé không?')) {
                                        handleCancelTickets(route._id);
                                    }
                                }}>Yêu cầu hủy</Button>

                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default OrderList;
