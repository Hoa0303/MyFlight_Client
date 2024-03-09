// LoginForm.jsx
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = ({ onLogin, isRegisterPage }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!email || !password || (isRegisterPage && !phone)) {
            setError('All fields are required.');
            return;
        }

        if (isRegisterPage && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userData = { email, password };
            if (isRegisterPage) {
                userData.phone = phone;
            }

            const response = await axios.post(`http://localhost:3001/${isRegisterPage ? 'register' : 'login'}`, userData);
            if (response.data === "Success") {
                onLogin(); // Thông báo cho cha rằng đăng nhập thành công
            } else {
                setError('Incorrect email or password. Please try again.');
            }
        } catch (error) {
            console.error(`${isRegisterPage ? 'Register' : 'Login'} error:`, error);
            setError(`An error occurred while ${isRegisterPage ? 'registering' : 'logging in'}. Please try again later.`);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <h1 className="mb-3 h3 text-center"><strong className='purple'>{isRegisterPage ? 'Register' : 'Log In'}</strong></h1>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            {isRegisterPage && (
                <Form.Group className="mb-4" controlId="formBasicPhone">
                    <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>
            )}
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {isRegisterPage && (
                <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
            )}
            <Button type="submit" className="btn-block mb-4 col-12">
                {isRegisterPage ? 'Register' : 'Sign In'}
            </Button>
        </Form>
    );
};

export default LoginForm;
