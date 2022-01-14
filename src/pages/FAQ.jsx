import React from 'react';
import { FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
    const handleToggleRotateChevron = (e) => {
        const target = e.currentTarget;
        target.children[0].classList.contains('active') ?
            target.children[0].classList.remove('active') :
            target.children[0].classList.add('active')

    }
    return (
        <div className='FAQ'>
            <div className="mainWrapper">
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq0" aria-expanded="false" aria-controls="faq0">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq0">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq1">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq2">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq3">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq4">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq5">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq6">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq7">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq8">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nemo et fugit facere ex deserunt ut. Voluptate, repudiandae totam molestias eaque quae placeat quisquam magnam ex facere enim aliquid minima.
                        </p>
                    </div>
                    <div class="collapse" id="faq9">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="question" onClick={handleToggleRotateChevron} data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="false" aria-controls="faq10">
                        <div className='icon'>
                            <FiChevronUp />
                        </div>
                        <p>
                            How do I fnd someones page on Wallmorial?
                        </p>
                    </div>
                    <div class="collapse" id="faq10">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
