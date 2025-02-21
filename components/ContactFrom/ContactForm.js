import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
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
      
          try {
            // Send the form data to your backend
            const response = await fetch('http://localhost:4000/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(forms), // Send the 'forms' state as JSON
            });
      
            if (response.ok) {
              // If successful, you can parse the JSON response (optional)
              const data = await response.json();
              console.log('Response from server:', data);
      
              // Reset the form fields
              setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
              });
      
              // Optionally show a success message to the user
              alert('Form submitted successfully!');
            } else {
              // If server responded with a non-OK status
              const errorData = await response.json();
              console.log('Error response:', errorData);
              alert('Error submitting form: ' + (errorData.msg || 'Unknown error'));
            }
          } catch (error) {
            // Network or other errors
            console.error('Fetch error:', error);
            alert('Could not submit the form. Please try again later.');
          }
        } else {
          // If client-side validation fails
          validator.showMessages();
        }
      };
      

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
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
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="submit-area">
                        <button type="submit" className="theme-btn">Submit</button>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default ContactForm;