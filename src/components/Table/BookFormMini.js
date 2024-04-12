import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCalendar from './Calendar';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const BookFormMini = () => {
    const location = useLocation();
    const formData = location.state?.formData;
    const navigate = useNavigate();
    const [departurePoint, setDeparturePoint] = useState(formData.departurePoint);
    const [destination, setDestination] = useState(formData.destination);
    const [passengers, setPassengers] = useState(formData.passengers);
    const [showDepartureOptions, setShowDepartureOptions] = useState(false);
    const [showDestinationOptions, setShowDestinationOptions] = useState(false);
    const [calendarValue, setCalendarValue] = useState([]);

    const handleDepartureClick = (departure) => {
        setDeparturePoint(departure);
        setShowDepartureOptions(false);
    };

    const handleDestinationClick = (destination) => {
        setDestination(destination);
        setShowDestinationOptions(false);
    };

    const handlePassengerChange = (e) => {
        setPassengers(parseInt(e.target.value));
    };

    const handleCalendarChange = (value) => {
        setCalendarValue(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            departurePoint: departurePoint,
            destination: destination,
            passengers: passengers,
            calendarValue: calendarValue,
            // Thêm các trường dữ liệu khác vào đây nếu cần
        };

        navigate('/search', { state: { formData: data } });
    };

    return (
        <Container>
            <form className="mb-3 BookFormMini" onSubmit={handleFormSubmit}>
                <div className="card card-body ">
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-12" onClick={() => setShowDepartureOptions(!showDepartureOptions)}>
                            <div className="mb-3">
                                <label htmlFor="selectedDer" className="form-label">Departure point</label>
                                <input name="Departurepoint" type="text" className="form-control pointer" id="selectedDer" value={departurePoint} readOnly />
                            </div>
                        </div>
                        <div className="col-12" onClick={() => setShowDestinationOptions(!showDestinationOptions)}>
                            <div className="mb-3">
                                <label data-translate="destination" htmlFor="exampleFormControlInput1" className="form-label">Destination</label>
                                <input name="Destination" type="text" className="form-control pointer" id="selectedDes" value={destination} readOnly />
                            </div>
                        </div>

                    </div>

                    {/* Row 2  */}
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label data-translate="passengers" htmlFor="exampleFormControlInput1" className="form-label">Passengers</label>
                                <input name="Passengers" type="number" className="form-control pointer" id="formGroupExampleInput" value={passengers} min="1" max="9" onChange={handlePassengerChange} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <MyCalendar onChange={handleCalendarChange} />
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-end">
                            <button name="search" type="submit" className="btn btn-primary mb-3 form-control"><span>Search</span></button>
                        </div>
                    </div>

                    {/* Show Departure */}
                    {showDepartureOptions && (
                        <div className="container-fluid mt-3 address">
                            <div className="mb-3">
                                <div className="card card-body bookticket">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="text-primary">Lựa chọn thành phố khởi hành</h5>
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="departurepoint" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Bắc</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="departure pointer" data-departure="Hà Nội" onClick={() => handleDepartureClick('Hà Nội')}>Hà Nội (HAN)</li>
                                                        <li className="departure pointer" data-departure="Hải Phòng" onClick={() => handleDepartureClick('Hải Phòng')}>Hải Phòng (HPH)</li>
                                                        <li className="departure pointer" data-departure="Điện Biên" onClick={() => handleDepartureClick('Điện Biên')}>Điện Biên (DIN)</li>
                                                        <li className="departure pointer" data-departure="Quảng Ninh" onClick={() => handleDepartureClick('Quảng Ninh')}>Quảng Ninh (VDO)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add more regions */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="departurepoint" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Trung</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="departure pointer" data-departure="Huế" onClick={() => handleDepartureClick('Huế')}>Huế (HUI)</li>
                                                        <li className="departure pointer" data-departure="Đà Năng" onClick={() => handleDepartureClick('Đà Nẵng')}>Đà Nẵng (DAD)</li>
                                                        <li className="departure pointer" data-departure="Lâm Đồng" onClick={() => handleDepartureClick('Lâm Đồng')}>Lâm Đồng (DLI)</li>
                                                        <li className="departure pointer" data-departure="Nha Trang" onClick={() => handleDepartureClick('Nha Trang')}>Nha Trang (CXR)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add more regions */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="departurepoint" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Nam</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="departure pointer" data-departure="Hồ Chí Minh" onClick={() => handleDepartureClick('Hồ Chí Minh')}>Hồ Chí Minh (SGN)</li>
                                                        <li className="departure pointer" data-departure="Phú Quốc" onClick={() => handleDepartureClick('Phú Quốc')}>Phú Quốc (PQC)</li>
                                                        <li className="departure pointer" data-departure="Cần Thơ" onClick={() => handleDepartureClick('Cần Thơ')}>Cần Thơ (VCA)</li>
                                                        <li className="departure pointer" data-departure="Cà Mau" onClick={() => handleDepartureClick('Cà Mau')}>Cà Mau (CAH)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Show Destination */}
                    {showDestinationOptions && (
                        <div className="container-fluid mt-3 address">
                            <div className="mb-3">
                                <div className="card card-body bookticket">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="text-primary">Lựa chọn điểm đến</h5>
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="destination" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Bắc</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="destination pointer" data-destination="Hà Nội" onClick={() => handleDestinationClick('Hà Nội')}>Hà Nội (HAN)</li>
                                                        <li className="destination pointer" data-destination="Hải Phòng" onClick={() => handleDestinationClick('Hải Phòng')}>Hải Phòng (HPH)</li>
                                                        <li className="destination pointer" data-destination="Điện Biên" onClick={() => handleDestinationClick('Điện Biên')}>Điện Biên (DIN)</li>
                                                        <li className="destination pointer" data-destination="Quảng Ninh" onClick={() => handleDestinationClick('Quảng Ninh')}>Quảng Ninh (VDO)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add more regions */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="departurepoint" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Trung</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="departure pointer" data-departure="Huế" onClick={() => handleDestinationClick('Huế')}>Huế (HUI)</li>
                                                        <li className="departure pointer" data-departure="Đà Năng" onClick={() => handleDestinationClick('Đà Nẵng')}>Đà Nẵng (DAD)</li>
                                                        <li className="departure pointer" data-departure="Lâm Đồng" onClick={() => handleDestinationClick('Lâm Đồng')}>Lâm Đồng (DLI)</li>
                                                        <li className="departure pointer" data-departure="Nha Trang" onClick={() => handleDestinationClick('Nha Trang')}>Nha Trang (CXR)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add more regions */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label data-translate="departurepoint" htmlFor="exampleFormControlInput1" className="form-label mb-0"><span className="text-primary"><b>Miền Nam</b></span></label>
                                                <div className="mb-3">
                                                    <ul className="p-0 text-primary text-start">
                                                        <li className="departure pointer" data-departure="Hồ Chí Minh" onClick={() => handleDestinationClick('Hồ Chí Minh')}>Hồ Chí Minh (SGN)</li>
                                                        <li className="departure pointer" data-departure="Phú Quốc" onClick={() => handleDestinationClick('Phú Quốc')}>Phú Quốc (PQC)</li>
                                                        <li className="departure pointer" data-departure="Cần Thơ" onClick={() => handleDestinationClick('Cần Thơ')}>Cần Thơ (VCA)</li>
                                                        <li className="departure pointer" data-departure="Cà Mau" onClick={() => handleDestinationClick('Cà Mau')}>Cà Mau (CAH)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </Container>
    );
};

export default BookFormMini;

