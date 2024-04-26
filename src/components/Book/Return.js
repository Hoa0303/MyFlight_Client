import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Cookies from 'js-cookie';

const Return = () => {
    const [returnRoute, setRoute] = useState([]);
    // const [selectedTickets, setSelectedTickets] = useState({});

    useEffect(() => {
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

                const foundDeparturePoint = allData.airport.find(airport => airport.local === Cookies.get('Departure'));

                if (foundDeparturePoint) {
                    Cookies.set('Departure', foundDeparturePoint.name);
                }

                const foundDesstination = allData.airport.find(airport => airport.local === Cookies.get('Destination'));

                if (foundDesstination) {
                    Cookies.set('Destination', foundDesstination.name);
                }

                // Lấy giá trị IdReturnRoute từ cookies
                const IdReturnRoute = Cookies.get('IdReturnRoute');

                // Tìm route dựa trên IdReturnRoute từ cookies
                const route = allData.routes.find(e => e._id === IdReturnRoute);

                if (route) {
                    setRoute([route]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <div>
                <div className="container">
                    {returnRoute.map(route => (
                        <div key={route._id} className="row text-white mb-5 custom-border">
                            <div className="col-lg-3 col-md-6 col-12 text-center mt-3 mb-3">
                                <p>{route.MaHang}</p>
                                <p>{route.SoHieu}</p>
                                <p>{Cookies.get('ReturnType')}</p>
                            </div>
                            <div className="col-lg-3  col-md-6 col-12 mt-3 mb-3">
                                <p>{route.NgayKhoiHanh}</p>
                                <h3> {route.GioKhoiHanh}</h3>
                                <p>Sân bay: {Cookies.get('Destination')}</p>
                            </div>
                            <div className="col-lg-3  col-md-6 col-12 mt-3 mb-3">
                                <p>{route.NgayKhoiHanh}</p>
                                <h3> {route.GioDen}</h3>
                                <p>Sân bay: {Cookies.get('Departure')}</p>
                            </div>
                            <div className="col-lg-3  col-md-6 col-12 mt-3 mb-3">
                                <h3>{(route.GiaTuyenBay * Cookies.get('Passenger')).toLocaleString('vi-VN')}đ</h3>
                                <p>/{Cookies.get("Passenger")} khách</p>
                                <p className="link-info">Chi tiết</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Return;
