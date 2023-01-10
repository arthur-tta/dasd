import "./styles.css"
import avatar from '../../assets/images/1.png'

import BaseLayout from "../../general/components/layout";
import { useNavigate } from "react-router-dom";

function Infor() {
    const inforData ={
            image: avatar,
            name: "Trần Tuấn Anh",
            birthday: "12-09-2001",
            phone: "0989***981",
            email: "trantuananh36th@gmail.com",
            address: "Hoàng Văn Thụ, Hoàng Mai, Hà Nội",
            description: "Đời là bể khổ, qua được bể khổ là hết đời"
        }     
    

    const navigate = useNavigate()

    return (
        <BaseLayout>
            <div className="infor">
                <div className="infor__header">
                    <h1>My Information</h1>
                </div>
                <div className="infor__body">
                    <div className="infor__body__sidebar">
                        <ul>
                            <li><a href="#">Information & Contact</a></li>
                            <li><a href="#">Change Information</a></li>
                            <li><a href="#">Change Password</a></li>
                
                        </ul>
                    </div>
                    <div className="infor__body__content">
                        <div className="header">
                            <h1>Information</h1>
                        </div>
                        <div className="body">
                            <img src={inforData.image}></img>

                            <div className="information-left">
                                <p>Full name:</p>
                                <p>Birthday:</p>
                                <p>Email address:</p>
                                <p>Phone number:</p>
                                <p>Address:</p>
                                <p>Description:</p>
                            </div>

                            <div className="information-right">
                                <p>{inforData.name}</p>
                                <p>{inforData.birthday}</p>
                                <p>{inforData.email}</p>
                                <p>{inforData.phone}</p>
                                <p>{inforData.address}</p>
                                <p>{inforData.description}</p>

                            </div>
                        
                            
                        </div>
                    </div>

                </div>

                

            </div>
        </BaseLayout>
    )
}

export default Infor;
