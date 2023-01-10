import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HomepageLayout from "../../../general/components/layoutHomepage";
import AppButton from "../../../general/components/appButton";

function Login() {
    const navigate  = useNavigate()

    const loginHandler = () => {
        navigate('/test')
        // code 
    }
    return (
        <HomepageLayout>
            <div className="login-page">
                <h4>Đăng nhập</h4>
                <Form className="w-25">
                    <Form.Group className="mt-10">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Nhập email" />
                    </Form.Group>
                    <Form.Group className="mt-10">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" name='password' />
                    </Form.Group>
                </Form>

                <AppButton 
                    text="Login"
                    className="btn-blue mt-2"
                    onClick={loginHandler} 
                />
                <Link to = '/forget-password'>Quên mật khẩu?</Link>
                <p>
                    Bạn chưa có tài khoản?
                    <Link to = '/signup'>Signup</Link>
                </p>
            </div>
            
        </HomepageLayout>
    )
}

export default Login;