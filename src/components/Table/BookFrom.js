import React, { useState } from 'react';
import MyCalendar from './Calendar';
import { Container } from 'react-bootstrap';

const BookForm = () => {
    const [departurePoint, setDeparturePoint] = useState('Hồ Chí Minh');
    const [destination, setDestination] = useState('Hà Nội');
    const [passengers, setPassengers] = useState(1);
    const [showDepartureOptions, setShowDepartureOptions] = useState(false);
    const [showDestinationOptions, setShowDestinationOptions] = useState(false);

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

    return (
        <Container>
            <h1 className="project-heading">
                <strong className="purple">Book Ticket</strong>
            </h1>
            <form className="mb-3 BookForm" method="post">
                <div className="card card-body ">
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-12 col-md-3" onClick={() => setShowDepartureOptions(!showDepartureOptions)}>
                            <div className="mb-3">
                                <label htmlFor="selectedDer" className="form-label">Departure point</label>
                                <input name="Departurepoint" type="text" className="form-control pointer" id="selectedDer" value={departurePoint} readOnly />
                            </div>
                        </div>
                        <div className="col-12 col-md-3" onClick={() => setShowDestinationOptions(!showDestinationOptions)}>
                            <div className="mb-3">
                                <label data-translate="destination" htmlFor="exampleFormControlInput1" className="form-label">Destination</label>
                                <input name="Destination" type="text" className="form-control pointer" id="selectedDes" value={destination} readOnly />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label data-translate="passengers" htmlFor="exampleFormControlInput1" className="form-label">Passengers</label>
                                <input name="Passengers" type="number" className="form-control pointer" id="formGroupExampleInput" value={passengers} min="1" max="10" onChange={handlePassengerChange} />
                            </div>
                        </div>
                    </div>

                    {/* Row 2  */}
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="mb-3">
                                {/* <label htmlFor="departureDate" className="form-label">Date</label> */}
                                {/* <input name="Departuredate" type="date" className="form-control" id="departureDate" defaultValue="2023-10-18" /> */}
                                <MyCalendar />
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="mb-3">
                                <label htmlFor="airlines" className="form-label">Airlines</label>
                                <select name="Airlines" id="airlines" className="form-select pointer">
                                    <option value="selectall" defaultValue>Select all</option>
                                    <option value="VJ">VJ - Vietjet Air</option>
                                    <option value="VN">VN - Vietnam Airlines</option>
                                    <option value="QH">QH - Bamboo Airways</option>
                                    <option value="VU">VU - Vietravel Airlines</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 d-flex align-items-end">
                            <button name="search" type="submit" className="btn btn-primary mb-3 form-control"><i className="fa-solid fa-magnifying-glass"></i> <span>Search</span></button>
                        </div>
                    </div>

                    {/* Show Departure */}
                    {showDepartureOptions && (
                        <div className="container-fluid mt-3 address">
                            <div className="mb-3">
                                <div className="card card-body bookticket">
                                    <div className="row">
                                        <div className="col-11 col-md-11">Lựa chọn thành phố khởi hành</div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-12 col-md-4">
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
                                        <div className="col-12 col-md-4">
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
                                        <div className="col-12 col-md-4">
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
                                        <div className="col-11 col-md-11">Lựa chọn điểm đến</div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-12 col-md-4">
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
                                        <div className="col-12 col-md-4">
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
                                        <div className="col-12 col-md-4">
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

export default BookForm;

