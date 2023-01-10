import BaseLayout from "../../general/components/layout";

function Test() {
    const testFormats = [
        {
            name: "TOEIC photopraphs"
        },
        {
            name: "TOEIC Conversations"
        },
        {
            name: "TOEIC text completion"
        }
    ]
    return (
        <BaseLayout>
            <div>
                {testFormats.map((item, index) => (
                    <div>
                        {item.name}
                    </div>
                ))}
            </div>
        </BaseLayout>
    )
}

export default Test;