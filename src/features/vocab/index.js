import BaseLayout from "../../general/components/layout";
import topic1 from "../../assets/images/topic1.jpg"
import topic2 from "../../assets/images/topic2.jpg"
import topic3 from "../../assets/images/topic3.jpg"
import { useNavigate } from "react-router-dom";

function Vocab() {
    const topicData = [         //fake data
        {
            name: "Work",
            image: topic1,
        },
        {
            name: "Education",
            image: topic2
        },
        {
            name: "Music",
            image: topic3
        },
        {
            name: "Sport",
            image: topic2
        },
        {
            name: "Environment",
            image: topic3
        },
        {
            name: "Fashion",
            image: topic1
        },
    ]
    const navigate = useNavigate()

    return (
        <BaseLayout>
            vocab topics
            <div className="row p-5">
                {topicData.map((item, index) => (
                    <div className="topic-card col-2" onClick={() => navigate('./topic-vocabs')} style={{cursor: "pointer"}}>
                        <img src={item.image} width="150px" height="150px"/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            
        </BaseLayout>
    )
}

export default Vocab;