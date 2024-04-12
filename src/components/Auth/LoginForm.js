import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!email || !password) {
            setAlertVariant('danger');
            setAlertMessage('All fields are required.');
            return;
        }

        try {
            const userData = { email, password };
            const response = await axios.post('http://localhost:3000/api/users/login', userData);
            alert('Login successful!');
            Cookies.set('userID', response.data._id);
            Cookies.set('userName', response.data.name ?? 'Me')
            onLogin();
        } catch (error) {
            setAlertVariant('danger');
            setAlertMessage('Invalid username or password.');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {alertMessage && <Alert variant={alertVariant}>{alertMessage}</Alert>}
            <h1 className="mb-3 h3 text-center"><strong className='purple'>Log In</strong></h1>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" className="btn-block mb-4 col-12">Sign In</Button>
        </Form>
    );
};

export default LoginForm;
