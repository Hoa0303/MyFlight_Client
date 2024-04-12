// RegisterForm.jsx
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegisterForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Kiểm tra trống
        if (!email || !password || !phone) {
            alert('All fields are required.');
            return;
        }

        // Kiểm tra mật khẩu xác nhận
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const userData = { email, phone, password };
            await axios.post('http://localhost:3000/api/users', userData);
            alert('Registration successful!');
            onLogin();
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred while registering. Please try again later.');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className="mb-3 h3 text-center"><strong className='purple'>Register</strong></h1>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" className="btn-block mb-4 col-12">Register</Button>
        </Form>
    );
};

export default RegisterForm;