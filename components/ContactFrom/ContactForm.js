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
        website: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        validators: {
            phone_flexible: {
                message: 'The :attribute must be a valid phone number.',
                rule: (val) => {
                    // Accepts formats: (xxx) xxx-xxxx, x-xxx-xxx-xxxx, xxx-xxx-xxxx, xxx xxx xxxx, (xxx) xxx xxxx
                    const phoneRegex = /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
                    return phoneRegex.test(val);
                }
            }
        }
    }));
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
                    credentials: 'include'
                });
                        
                if (response.ok) {
                    setForms({
                        name: '',
                        email: '',
                        subject: '',
                        phone: '',
                        website: '',
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
                                {validator.message('phone', forms.phone, 'required|phone_flexible')}
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
                                    <option>Marketing, Digital Presence & Website Optimization</option>
                                    <option>Business to Business</option>
                                    <option>Contract Consulting</option>
                                    <option>Other</option>
                                </select>
                                {validator.message('subject', forms.subject, 'required')}
                            </div>
                        </div>
                        <div className="col col-lg-12 col-12">
                            <div className="form-field">
                                <input
                                    value={forms.website}
                                    type="text"
                                    name="website"
                                    onBlur={changeHandler}
                                    onChange={changeHandler}
                                    placeholder="Website or Relevant Links (Optional)"
                                />
                                {forms.website && validator.message('website', forms.website, 'url')}
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
