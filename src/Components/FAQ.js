import React from 'react';

const FAQ = ({faq, index, toggleFAQ}) => {
    return (
        <div 
            className={"faq" + (faq.open ? ' open' : '')} 
            key={index} 
            onClick={() => toggleFAQ(index)}
        >
            <h3 className="faqQuestion">
                {faq.question}
            </h3>
            <p className="faqAnswer">
                {faq.answer}
            </p>
        </div>
    )
}

export default FAQ;