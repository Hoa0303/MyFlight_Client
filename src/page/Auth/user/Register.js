import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import RegisterForm from '../../../components/Auth/RegisterFrom';

const RegisterPage = () => {
    const loginPagePath = '/login';

    const handleRes = () => {
        window.location.href = loginPagePath;
    }

    return (
        <Container fluid className="home-section z-0">
            <section>
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                Welcome to <br />
                                <span><strong className="purple">My Flight</strong></span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <RegisterForm onLogin={handleRes} />
                                    <div className="text-center">
                                        <p className='container my-2'>
                                            Already have an account?<Link to='/login'> Login</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default RegisterPage;
