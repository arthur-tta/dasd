import "./styles.css"
import { useNavigate } from "react-router-dom";

import AppButton from "../../../general/components/appButton";
import BaseLayout from "../../../general/components/layout";
import word1 from "../../../assets/images/agreement.jpg"
import word2 from "../../../assets/images/assurance.jpg"
import word3 from "../../../assets/images/cancellation.jpg"


function TopicVocabs(props) {

    const vocabData = [        
    {
        word: "agreement",
        spelling: "/ə'gri:mənt/",
        explain_en: "an arrangement, a promise or a contract made with somebody",
        explain_vn: "(n): hợp đồng, giao kèo, sự đồng ý/thỏa thuận với nhau",
        example_en: "According to the agreement, the caterer will also supply the flowers for the event.",
        example_vn: "Theo như thỏa thuận, nhà cung cấp lương thực thực phẩm cũng sẽ cung cấp hoa cho sự kiện.",
        image: word1
    },
    {
        word: "assurance",
        spelling: "/ə'ʃuərəns/",
        explain_en: "a statement that something will certainly be true or will certainly happen",
        explain_vn: "(n): sự cam đoan, bảo đảm, chắc chắn; sự tin chắc, tự tin",
        example_en: "The sales associate gave his assurance that the missing keyboard would be replaced the next day.",
        example_vn: "Đối tác bán hàng cam đoan rằng ngày mai bàn phím lỗi sẽ được thay.",
        image: word2
    },
    {
        word: "cancellation",
        spelling: "/,kænse'leiʃn/",
        explain_en: "a decision to stop something that has already been arranged from happening",
        explain_vn: "(n): sự bãi bỏ, hủy bỏ",
        example_en: "The cancelation of her flight caused her problems for the rest of the week",
        example_vn: "Việc hủy chuyến bay đã gây cho cô ấy nhiều vấn đề trong những ngày còn lại của tuần.",
        image: word3
    },
   
    
    
]

    const navigate = useNavigate();
    return (
        <BaseLayout>
            <div className="background-vocab">
                <div className="header">
                    <h1>Lesson 1: Electronics</h1>
                </div>
                <div className="body">
                    {vocabData.map((item, index) => (
                        <div className="vocab">
                            <div className="vocab-left">
                                <img src={item.image}></img>
                            </div>
                            <div className="vocab-right">
                                <p>{index + 1}. <strong style={{color: "blue"}}>{item.word}</strong></p>
                                <p style={{color: "red"}}>{item.spelling}</p>
                                <p><strong>Giải thích:</strong> {item.explain_en}</p>
                                <p><strong>Từ loại: </strong>{item.explain_vn}</p>
                                <p><strong>Ví dụ: </strong>{item.example_en}</p>
                                <p><strong>Dịch: </strong>{item.example_vn}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer">
                    <div className="btn-last-topic">
                        <AppButton
                            text="Last Topic"
                            className="btn-blue"
                            onClick={() => navigate('/vocab/topic-vocabs')}
                        />
                    </div>
                    <div className="btn-next-topic">
                        <AppButton
                            text="Next Topic"
                            className="btn-blue"
                            onClick={() => navigate('/vocab/topic-vocabs')}
                        />
                    </div>
                </div>

            </div>
            
        </BaseLayout>
    )
}

export default TopicVocabs;