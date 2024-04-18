import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BoyImg from '../../Assets/BoyImg.jpg'
import GirlImg from '../../Assets/GrilImg.jpg'

const ProfileForm = () => {
    const [name, setName] = useState('');
    const [dob, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [cccd, setCCCD] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(BoyImg);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/users/${Cookies.get("userID")}`);
                setEmail(response.data.email);
                setName(response.data.name);
                setCCCD(response.data.cccd);
                setGender(response.data.gender);
                setBirthday(response.data.dob);
                setPhone(response.data.phone);
                setAddress(response.data.address);
                // Set avatar URL based on gender
                if (response.data.gender === '0') {
                    setAvatarUrl(GirlImg);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = { name, email, cccd, gender, phone, address, dob };

            await axios.post('http://localhost:3000/api/users', userData);
            Cookies.set('userName', name);
            window.location.reload();
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    };

    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-8">
                    <h5 className="mb-4">Thông tin chung</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="Name">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tên của bạn" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="cccd">
                                    <Form.Label>CCCD</Form.Label>
                                    <Form.Control type="text" value={cccd} onChange={(e) => setCCCD(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="gender">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option>Chọn giới tính</option>
                                        <option value="0">Nữ</option>
                                        <option value="1">Nam</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="address">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập địa chỉ của bạn" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="birthday">
                                    <Form.Label>Ngày sinh</Form.Label>
                                    <Form.Control type="date" value={dob} onChange={(e) => setBirthday(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="phone">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="number" placeholder="+12-345 678 910" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Lưu tất cả</Button>
                    </Form>
                </div>
                <div className="col-md-4">
                    <h5 className="mb-4">Ảnh đại diện</h5>
                    <div className="text-center mb-4">
                        <img className="rounded-circle mb-2 img-thumbnail" src={avatar ? URL.createObjectURL(avatar) : avatarUrl} alt="Avatar" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Tải lên ảnh mới</label>
                        <input type="file" accept="image/*" className="form-control" id="avatar" onChange={handleAvatarChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;