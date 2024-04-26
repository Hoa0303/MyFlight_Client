import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';

const SeatReturn = ({ updateTickets }) => {
    const [ticketData, setTicketData] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const passengerCount = parseInt(Cookies.get('Passenger')) || 1;
    const [Tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tickets] = await Promise.all([
                    axios.get('http://localhost:3000/api/tickets'),
                ]);

                const allData = {
                    tickets: tickets.data,
                };

                const idTuyen = Cookies.get('IdReturnRoute');
                const filteredTickets = allData.tickets.filter(ticket => ticket.IdTuyen === idTuyen);
                setTicketData(filteredTickets);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSeatSelection = (seat) => {
        const isSeatSelected = selectedSeats.includes(seat);

        if (isSeatSelected) {
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
        } else {
            if (selectedSeats.length < passengerCount) {
                setSelectedSeats([...selectedSeats, seat]);
                setTickets([...Tickets, ticketData.find(ticket => ticket.ChoNgoi === seat)._id]);
                // Gọi hàm cập nhật để truyền giá trị Tickets lên BookPage
                updateTickets([...Tickets, ticketData.find(ticket => ticket.ChoNgoi === seat)._id]);
            } else {
                alert(`Bạn chỉ được chọn tối đa ${passengerCount} ghế.`);
            }
        }
    };

    const renderSeatColumns = () => {
        const seatColumns = {
            A: [],
            B: [],
            C: [],
            D: []
        };

        ticketData.forEach(ticket => {
            const columnKey = ticket.ChoNgoi.charAt(0);
            if (seatColumns.hasOwnProperty(columnKey)) {
                seatColumns[columnKey].push(ticket);
            }
        });

        return (
            <div className="seat-columns-container">
                {Object.entries(seatColumns).map(([columnKey, seats]) => (
                    <Col key={columnKey} className="seat-column">
                        <div>
                            {seats.map(seat => (
                                <Button
                                    className='m-1'
                                    key={seat.id}
                                    variant={seat.MaDatVe !== "" ? 'secondary' : (selectedSeats.includes(seat.ChoNgoi) ? 'success' : 'outline-primary')}
                                    onClick={() => {
                                        if (seat.MaDatVe === "") {
                                            handleSeatSelection(seat.ChoNgoi);
                                        }
                                    }}
                                    disabled={seat.MaDatVe !== ""}
                                >
                                    {seat.ChoNgoi}
                                </Button>
                            ))}
                        </div>
                    </Col>
                ))}
            </div>
        );
    };

    return (
        <Container>
            {renderSeatColumns()}
            <div>
                <p className='text-white'>Số ghế đã chọn: {selectedSeats.length}</p>
                <p className='text-white'>Danh sách ghế đã chọn: {selectedSeats.join(', ')}</p>
            </div>
        </Container>
    );
};

export default SeatReturn;
