import { CircularProgress } from '@mui/material';
import React from 'react';
import useFAQ from '../Hooks/useFAQ';

const FAQ = () => {
    const faq = useFAQ();
    return (
        faq.FAQValues.isLoading ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "calc(100vh - 112px)" }}>
                <CircularProgress />
            </div>
        ) : (
            <div className='FAQ'>
                <div className="mainWrapper">
                    {
                        faq.FAQValues.values.map((val, index) => {
                            return (
                                <div className='my-3' key={index}>
                                    <div className={index === 0 ? "question active" : "question"} onClick={faq.handleToggleActive} data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded="false" aria-controls={`faq${index}`}>
                                        <div className='icon'>
                                            Q.
                                        </div>
                                        <p>
                                            {val.question}
                                        </p>
                                    </div>
                                    <div className={index === 0 ? "collapse show answer" : "collapse answer"} id={`faq${index}`}>
                                        {val.answer}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    )
}

export default FAQ
