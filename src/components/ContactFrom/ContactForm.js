import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [, forceUpdate] = useState(0);

    const validator = useRef(
        new SimpleReactValidator({
            className: 'errorMessage',
            autoForceUpdate: { forceUpdate }
        })
    );

    // ---------- Input sanitizers ----------
    const sanitizeInput = (name, value) => {
        switch (name) {
            case 'name':
                return value.replace(/[^A-Za-z\s]/g, '');
            case 'phone':
                return value.replace(/[^0-9]/g, '').slice(0, 10);
            case 'message':
                return value.replace(/[<>?]/g, '');
            case 'email':
                return value.replace(/[<>?\s]/g, '');
            default:
                return value;
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(name, value);

        setForms(prev => ({
            ...prev,
            [name]: sanitizedValue
        }));

        validator.current.showMessageFor(name);
        forceUpdate(v => v + 1);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (validator.current.allValid()) {
            alert('Form submitted successfully');

            setForms({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            validator.current.hideMessages();
        } else {
            validator.current.showMessages();
            forceUpdate(v => v + 1);
        }
    };

    const isFormValid = validator.current.allValid();

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div className="row">

                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            type="text"
                            name="name"
                            value={forms.name}
                            onChange={changeHandler}
                            placeholder="Your Name"
                        />
                        {validator.current.message(
                            'name',
                            forms.name,
                            'required|alpha_space'
                        )}
                    </div>
                </div>

                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            type="email"
                            name="email"
                            value={forms.email}
                            onChange={changeHandler}
                            placeholder="Your Email"
                        />
                        {validator.current.message(
                            'email',
                            forms.email,
                            'required|email'
                        )}
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            type="text"
                            name="phone"
                            value={forms.phone}
                            onChange={changeHandler}
                            placeholder="Your Phone"
                        />
                            {validator.current.message(
                                'phone',
                                forms.phone,
                                'required|numeric'
                            )}
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <textarea
                            name="message"
                            value={forms.message}
                            onChange={changeHandler}
                            placeholder="Message"
                        />
                        {validator.current.message(
                            'message',
                            forms.message,
                            'required|min:5'
                        )}
                    </div>
                </div>

            </div>

            <div className="submit-area">
                <button
                    type="submit"
                    className="theme-btn"
                    disabled={!isFormValid}
                    style={{
                        opacity: isFormValid ? 1 : 0.5,
                        cursor: isFormValid ? 'pointer' : 'not-allowed'
                    }}
                >
                    Get in Touch
                </button>
            </div>
        </form>
    );
};

export default ContactForm;