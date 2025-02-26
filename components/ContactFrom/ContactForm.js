import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const apiUrl = process.env.NEXT_PUBLIC_API

console.log('Using API URL:', apiUrl); // Debugging
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXT_PUBLIC_API:', process.env.NEXT_PUBLIC_API);



const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loader state

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            validator.hideMessages();
            setIsLoading(true); // Show loader while waiting for the response

            try {
                const response = await fetch( apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(forms),
                });
                        
                if (response.ok) {
                    setForms({
                        name: '',
                        email: '',
                        subject: '',
                        phone: '',
                        message: ''
                    });

                    setSubmissionSuccess(true);
                } else {
                    const errorData = await response.json();
                    console.log('Error response:', errorData);
                    alert('Error submitting form: ' + (errorData.msg || 'Unknown error'));
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert('Could not submit the form. Please try again later.');
            } finally {
                setIsLoading(false); // Hide loader regardless of success or failure
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <div>
            {isLoading ? (
                <div className="loading-container success-message">
                    <img src='/images/fancybox/loader2.svg' alt='Loading...' />
                </div>
            ) : submissionSuccess ? (
                <div className="success-message">
                    <p>We received your submission. Thank you for reaching out!</p>
                    <button className="theme-btn" onClick={() => setSubmissionSuccess(false)}>
                        Submit Another Inquiry
                    </button>
                </div>
            ) : (
                <form onSubmit={submitHandler} className="contact-validation-active">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <input
                                    value={forms.name}
                                    type="text"
                                    name="name"
                                    onBlur={changeHandler}
                                    onChange={changeHandler}
                                    placeholder="Your Name"
                                />
                                {validator.message('name', forms.name, 'required|alpha_space')}
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <input
                                    value={forms.email}
                                    type="email"
                                    name="email"
                                    onBlur={changeHandler}
                                    onChange={changeHandler}
                                    placeholder="Your Email"
                                />
                                {validator.message('email', forms.email, 'required|email')}
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <input
                                    value={forms.phone}
                                    type="phone"
                                    name="phone"
                                    onBlur={changeHandler}
                                    onChange={changeHandler}
                                    placeholder="Your Phone"
                                />
                                {validator.message('phone', forms.phone, 'required|phone')}
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <select
                                    onBlur={changeHandler}
                                    onChange={changeHandler}
                                    value={forms.subject}
                                    name="subject"
                                >
                                    <option value="">Select</option>
                                    <option>Website Development and Online Presence</option>
                                    <option>Business to Business</option>
                                    <option>Branding and Rebranding</option>
                                    <option>Contract Consulting</option>
                                    <option>Social Media and/or Video Production</option>
                                    <option>Other Relevant Marketing Services</option>
                                </select>
                                {validator.message('subject', forms.subject, 'required')}
                            </div>
                        </div>
                        <div className="col col-lg-12 col-12 comment-area">
                            <textarea
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                value={forms.message}
                                name="message"
                                placeholder="Message"
                            />
                            {validator.message('message', forms.message, 'required')}
                        </div>
                        <div className="col col-lg-12 col-12">
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
