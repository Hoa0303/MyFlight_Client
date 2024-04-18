import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListTicket = ({ ticketId }) => {
    const [ticket, setTicket] = useState('');
    const [route, setRoute] = useState('');
    const [flight, setFlight] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Tìm thông tin vé
                const response = await axios.get(`http://localhost:3000/api/tickets/${ticketId}`);
                const ticketData = response.data;
                setTicket(ticketData);
                // Tìm thông tin tuyến
                const routeResponse = await axios.get(`http://localhost:3000/api/flight_route/${ticketData.IdTuyen}`);
                const routeData = routeResponse.data;
                setRoute(routeData);
                // Tìm thông tin chuyến
                const flightResponse = await axios.get(`http://localhost:3000/api/flight/${routeData.TuyenBayId}`);
                const flightData = flightResponse.data;
                setFlight(flightData);
            } catch (error) {
                console.error('Error fetching ticket data:', error);
            }
        };

        fetchData();
    }, [ticketId]);

    return (
        <div className="row text-white mb-5 custom-border">
            <div className="col-lg-3 col-12  text-center mt-3 mb-3">
                <p>{route.MaHang} - {route.SoHieu} - {ticket.ChoNgoi}</p>
                <p>{ticket.MaTuyen} - {ticket.MaVe} - {ticket.MaLoai}</p>
            </div>
            <div className="col-lg-4 col-12 mt-3 mb-3">
                <p>Khởi hành: <span className='purple'> {flight.SanBayDi}</span></p>
                <p>Điểm đến: <span className='purple'>{flight.SanBayDen}</span></p>
            </div>
            <div className="col-lg-3 col-12 mt-3 mb-3">
                <p>Ngày khời hành: <span className='purple'>{route.NgayKhoiHanh}</span></p>
                <p>Thời gian: <span className='purple'>{route.GioKhoiHanh} - {route.GioDen}</span></p>
            </div>
            <div className="col-lg-2 col-12 mt-3 mb-3">
                <p className='link-info pointer'>Xem chi tiết</p>
            </div>
        </div>
    );
};

export default ListTicket;
