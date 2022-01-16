import React from 'react';

const FAQ = () => {
    const handleToggleActive = (e) => {
        const target = e.currentTarget;
        target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
    }
    return (
        <div className='FAQ'>
            <div className="mainWrapper">
                <div className='my-3'>
                    <div className="question active" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq0" aria-expanded="false" aria-controls="faq0">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse show answer" id="faq0">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq1">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq2">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq3">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq4">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq5">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq6">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq7">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>

                <div className='my-3'>
                    <div className="question" onClick={handleToggleActive} data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                        <div className='icon'>
                            Q.
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse answer" id="faq8">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
