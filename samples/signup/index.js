import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import './style.scss'

function Signup () {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () => { 
    };

    return (
        <div className="signup-screen d-flex flex-row">
            {/* <img src={bg_login} alt=""/> */}
            <div className="signup-form w-50 p-8">
                <p className="title text-center">Đăng ký</p>
                <Form>
                    <Form.Group className="mt-10">
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control type="text" name='name' onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group className="">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control type="text" name='phone' onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mt-10">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mt-10">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" name='password' onChange={(e) => handleChange(e)} />
                    </Form.Group> 
                </Form>

                <Button className='btn-submit' onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>Đăng ký</Button>

                <p className=''>Bạn đã có tài khoản?<Button className='btn-login' onClick={() => navigate('/login')}>Đăng nhập</Button></p>

            </div>
        </div>
    )
}

export default Signup;