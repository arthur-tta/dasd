import "./styles.css"

import BaseLayout from "../../../general/components/layout";
import topic1 from "../../../assets/images/topic1.jpg"
import topic2 from "../../../assets/images/topic2.jpg"
import topic3 from "../../../assets/images/topic3.jpg"
import { useNavigate } from "react-router-dom";

function Vocab() {
    const topicData = [         //fake data
        {
            name: "Contracts",
            image: topic1,
        },
        {
            name: "Marketing",
            image: topic2,
        },
        {
            name: "Warranties",
            image: topic3,
        },
        {
            name: "Business Planning",
            image: topic1,
        },
        {
            name: "Conferences",
            image: topic1,
        },
        {
            name: "Computer & Internet",
            image: topic1,
        },
        {
            name: "Office Technology",
            image: topic1,
        },
        {
            name: "Office Procedures",
            image: topic1,
        },
        
        
    ]

    const navigate = useNavigate()

    return (
        <BaseLayout>
            <div className="background-topic-vocab">
                <div className="header">
                    <h1>Topic Vocabulary</h1>
                </div>
                <div className="body">
                    {topicData.map((item, index) => (
                        <div className="topic-card" onClick={() => navigate('/vocab/topic-vocabs')}>
                            <div className="body-topic-card">
                                <img src={item.image}/>
                                <p>{item.name}</p>
                            </div>
                        
                        </div>
                    ))}
                </div>
                <div className="footer">

                </div>
            </div>
                
            
        </BaseLayout>
    )
}

export default Vocab;



