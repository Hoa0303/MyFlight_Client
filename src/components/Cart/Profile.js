import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Cookies from 'js-cookie';
import axios from 'axios';

const ProfileList = () => {
    const [User, setUser] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/users/${Cookies.get("userID")}`);
                setUser(response.data);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();

    }, []);

    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Header className='purple h3'>Thông tin Khách hàng</Card.Header>
                <Card.Text className="text-start custom-border"><span className='purple'>Họ tên: </span>{User.name}</Card.Text>
                <Card.Text className="text-start custom-border"><span className='purple'>Email: </span>{User.email}</Card.Text>
                <Card.Text className="text-start custom-border"><span className='purple'>Số điện thoại: </span>{User.phone}</Card.Text>
                <Card.Text className="text-start custom-border"><span className='purple'>Căn cước: </span>{User.cccd}</Card.Text>
                <Card.Text className="text-start custom-border"><span className='purple'>Địa chỉ: </span>{User.address}</Card.Text>
            </Card.Body>
        </Card>
    );
};
export default ProfileList;
