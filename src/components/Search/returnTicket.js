import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';


const ReturnTicket = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state?.formData;
    const [returnRoute, setReturn] = useState([]);
    const [selectedTicketType, setSelectedTicketType] = useState("EC");
    const [selectedTickets, setSelectedTickets] = useState({});

    useEffect(() => {
        if (formData) {
            const fetchData = async () => {
                try {
                    const [routes, flights, airport] = await Promise.all([
                        axios.get('http://localhost:3000/api/flight_route'),
                        axios.get('http://localhost:3000/api/flight'),
                        axios.get('http://localhost:3000/api/airport')
                    ]);

                    const allData = {
                        routes: routes.data,
                        flights: flights.data,
                        airport: airport.data
                    };

                    // Tìm sân bay đi phù hợp ở đây
                    const departurePoint = allData.airport.filter(ariport => {
                        return (
                            ariport.local === formData.departurePoint
                        );
                    });

                    // Tìm sân bay về 
                    const destination = allData.airport.filter(ariport => {
                        return (
                            ariport.local === formData.destination
                        );
                    });

                    // Từ departurePoint && destination để tìm tuyến bay phù hợp
                    const flight = allData.flights.filter(e => {
                        return (
                            e.SanBayDi === destination[0].name &&
                            e.SanBayDen === departurePoint[0].name
                        );
                    });

                    // Từ flight để tìm được tuyến phù hợp
                    const route = allData.routes.filter(e => {
                        return (
                            e.MaTuyenBay === flight[0].MaTuyen &&
                            e.NgayKhoiHanh === formData?.calendarValue?.[1]
                        );
                    });

                    setReturn(route);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [formData]);

    // Hàm xử lý khi người dùng thay đổi lựa chọn loại vé
    const handleTicketTypeChange = (event) => {
        setSelectedTicketType(event.target.value);
    };

    // Hàm chọn vé
    const handleSelectTicket = (routeId) => {
        // Xóa trạng thái của tất cả các vé đã chọn
        const updatedSelectedTickets = {};
        Object.keys(selectedTickets).forEach(id => {
            updatedSelectedTickets[id] = false;
        });
        setSelectedTickets(updatedSelectedTickets);

        // Lưu IdRoute vào cookies
        Cookies.set('IdReturnRoute', routeId);

        // Lưu selectedTicketType vào cookies
        Cookies.set('ReturnType', selectedTicketType);

        // Lưu thông tin tuyến
        Cookies.set('Departure', formData.departurePoint);
        Cookies.set('Destination', formData.destination);
        Cookies.set('Passenger', formData.passengers);

        // Cập nhật trạng thái đã chọn cho vé
        setSelectedTickets(prevState => ({
            ...prevState,
            [routeId]: true
        }));

        navigate('/bookticket');
    };

    return (
        <Container>
            <div className=''>
                {/* <h2 className="purple">Trip Tickets</h2> */}
                <div className="container">
                    {returnRoute.map(route => (
                        <div key={route._id} className="row text-white mb-5 custom-border">
                            <div className="col-lg-2 col-md-4 col-sm-4 col-12 text-center mt-3 mb-3">
                                <p>{route.MaHang}</p>
                                <p>{route.SoHieu}</p>
                                <select className="form-select text-center" value={selectedTicketType} onChange={handleTicketTypeChange}>
                                    <option value="EC">EC</option>
                                    <option value="BC">BC</option>
                                    <option value="PE">PE</option>
                                    <option value="SF">SF</option>
                                </select>
                            </div>
                            <div className="col-lg-3  col-md-4 col-sm-4 col-6 mt-3 mb-3">
                                <p>{route.NgayKhoiHanh}</p>
                                <h3> {route.GioKhoiHanh}</h3>
                                <p>Khởi hành: {formData.destination}</p>
                            </div>
                            <div className="col-lg-3  col-md-4 col-sm-4 col-6 mt-3 mb-3">
                                <p>{route.NgayKhoiHanh}</p>
                                <h3> {route.GioDen}</h3>
                                <p>Đích đến: {formData.departurePoint}</p>
                            </div>
                            <div className="col-lg-2  col-md-6 col-sm-6 col-7 mt-3 mb-3 text-end">
                                <h3>{(route.GiaTuyenBay * formData.passengers).toLocaleString('vi-VN')}đ</h3>
                                <p>/{formData.passengers} khách</p>
                                <p className="link-info">Chi tiết</p>
                            </div>
                            <div className="col-lg-2  col-md6 col-sm-6 col-5 mt-3 mb-3">
                                {selectedTickets[route._id] ? (
                                    <p className="btn btn-success">Đã chọn</p>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => handleSelectTicket(route._id)}>Chọn vé</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ReturnTicket;
