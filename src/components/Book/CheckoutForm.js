import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const CheckoutForm = () => {
    const location = useLocation();
    const formData = location.state?.formData;
    const [User, setUser] = useState('');
    const [priceRoute, setPriceRoute] = useState(0);
    const [priceTicket, setPriceTicket] = useState(0);
    const Passenger = Cookies.get('Passenger')

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Lấy thông tin User
                const response = await axios.get(`http://localhost:3000/api/users/${Cookies.get("userID")}`);
                setUser(response.data);

                // Lấy thông tin giá của hai tuyến
                const routeTrip = await axios.get(`http://localhost:3000/api/flight_route/${Cookies.get('IdTripRoute')}`);
                const routeReturn = await axios.get(`http://localhost:3000/api/flight_route/${Cookies.get('IdReturnRoute')}`);
                const totalRoute = (routeTrip.data.GiaTuyenBay * Cookies.get('Passenger') + routeReturn.data.GiaTuyenBay * Cookies.get('Passenger'));
                setPriceRoute(totalRoute)

                // Lấy thông tin giá của loại vé
                const ticket = await axios.get('http://localhost:3000/api/type');
                const Trip = ticket.data.filter(index => index.MaLoai === Cookies.get('TripType'));
                const Return = ticket.data.filter(index => index.MaLoai === Cookies.get('ReturnType'));
                setPriceTicket((Trip[0].Gia + Return[0].Gia) * Cookies.get('Passenger'));

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const UserId = User._id;
        let MaDatVe = '';
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        try {
            // Gửi dữ liệu từ TripTicket
            const tripData = {
                UserId: UserId,
                date: formattedDate,
                Tickets: formData.TripTicket
            };
            const tripResponse = await axios.post('http://localhost:3000/api/bookticket/', tripData);
            console.log('Trip data sent successfully:', tripResponse);

            MaDatVe = tripResponse.data; // Cập nhật MaDatVe sau khi gửi TripTicket

            // Chạy vòng lặp để gửi dữ liệu cho từng vé TripTicket
            for (let i = 0; i < formData.TripTicket.length; i++) {
                const data = { MaDatVe }; // Dữ liệu gửi đi chỉ có MaDatVe
                const ticketResponse = await axios.put(`http://localhost:3000/api/tickets/${formData.TripTicket[i]}`, data);
                console.log('Ticket data sent successfully:', ticketResponse);
            }

            // Gửi dữ liệu từ ReturnTicket
            const returnData = {
                UserId: UserId,
                date: formattedDate,
                Tickets: formData.ReturnTicket
            };
            const returnResponse = await axios.post('http://localhost:3000/api/bookticket/', returnData);
            console.log('Return data sent successfully:', returnResponse);

            MaDatVe = returnResponse.data; // Cập nhật lại MaDatVe sau khi gửi ReturnTicket

            // Chạy vòng lặp để gửi dữ liệu cho từng vé ReturnTicket
            for (let i = 0; i < formData.ReturnTicket.length; i++) {
                const data = { MaDatVe }; // Dữ liệu gửi đi chỉ có MaDatVe
                const ticketResponse = await axios.put(`http://localhost:3000/api/tickets/${formData.ReturnTicket[i]}`, data);
                console.log('Ticket data sent successfully:', ticketResponse);
            }

            // Thực hiện các hành động tiếp theo sau khi gửi dữ liệu thành công
            window.location.href = "/succsess";
        } catch (error) {
            console.error('Error sending data:', error);
            // Xử lý lỗi nếu có
        }
    };

    return (

        <div className="row g-5">
            {/* Thông tin khách hàng */}
            <div className="col-md-7 col-lg-8">
                <h3 className="mb-3 purple text-start">Thông tin khách hàng</h3>
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                        <div className="col-12 text-white text-start">
                            <label htmlFor="firstName" className="form-label">Họ tên</label>
                            <input type="text" className="form-control" id="firstName" value={User.name} required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-12 text-white text-start">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={User.email} />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="col-12 text-white text-start">
                            <label htmlFor="address" className="form-label">Địa chỉ</label>
                            <input type="text" className="form-control" id="address" value={User.address} required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 text-white" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                </form>
            </div>
            {/* Thông tin đơn hàng */}
            <div className="col-md-5 col-lg-4">
                <div className="card">
                    <div className="card-header text-start">
                        <b>Đơn hàng của bạn</b>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <p className="card-title text-start"><span>{Passenger}</span> x Người lớn</p>
                            </div>
                            <div className="col-6">
                                <p className="text-end"><span>{priceRoute}</span> đ</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="card-title text-start"><span>{Passenger}</span> x Phí dịch vụ</p>
                            </div>
                            <div className="col-6">
                                <p className="text-end"><span>{priceTicket}</span> đ</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="card-title text-start"><b>Tổng tiền</b></p>
                            </div>
                            <div className="col-6">
                                <p className="text-end mb-0"><span>{priceRoute + priceTicket}</span> đ</p>
                            </div>
                        </div>
                        <p className='text-start link-primary mb-0'>Bạn có mã giảm giá?</p>
                    </div>
                    <div className="card-footer bg-white mb-0">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="text-danger mb-0 text-start">Tổng chi phí</h5>
                            </div>
                            <div className="col-6">
                                <p className="text-end mb-0"><span>{priceRoute + priceTicket}</span> đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white ">
                        <div className="row">
                            <div className="col-12 mt-2 mb-4">
                                <input type="checkbox" /> Tôi chấp nhận <span className='link-primary'>điều khoản</span> & <span className='link-primary'>điều kiện giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
