import React, {useState} from 'react';
import FAQ from './FAQ';

const Questions = () => {
    const [faqs, setFaq] = useState([
        {
            question: "Question one",
            answer: "Answer one",
            open: true,
        },
        {
            question: "Question two",
            answer: "Answer two",
            open: false,
        },
        {
            question: "Question three",
            answer: "Answer three",
            open: false,
        },
    ]);

    const toggleFAQ = index => {
        setFaq(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }

            return faq
        }))
    }

    return (
        <>
            <h2>FAQs</h2>

            <div className="faqs">
                {faqs.map((faq, i) => (
                    <div>
                        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Questions;