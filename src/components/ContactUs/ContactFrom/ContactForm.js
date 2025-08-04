import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        company: '',
        address:'',
        country: '',
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

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                company: '',
                address:'',
                country: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text1">Your name</label>
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text2">Email</label>
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('email', forms.email, 'required|email')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text3">Phone</label>
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('phone', forms.phone, 'required|phone')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text4">Company name</label>
                        <div className="input-box">
                            <input
                                value={forms.company}
                                type="company"
                                name="company"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('company', forms.company, 'required|company')}
                </div>
                <div className="col-lg-8">
                    <div className="input-field text-field">
                        <label htmlFor="text5">Address</label>
                        <div className="input-box">
                            <input
                                 value={forms.address}
                                type="address"
                                name="compaddressany"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                             />
                        </div>
                    </div>
                    {validator.message('address', forms.address, 'required')}
                </div>
                <div className="col-lg-4">
    <div className="input-field text-field">
        <label htmlFor="country">Country</label>
        <div className="input-box">
            <select
                name="country"
                className="form-control"
                value={forms.country || ''}
                onChange={changeHandler}
                onBlur={changeHandler}
            >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
                <option value="South Africa">South Africa</option>
                {/* Add more as needed */}
            </select>
        </div>
    </div>
    {validator.message('country', forms.country, 'required')}
</div>

                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <label htmlFor="text6">How can we help you today?</label>
                        <div className="input-box">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control">
                            </textarea>
                        </div>
                    </div>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="contact-btn">
                <button className="cp-btn w-100" type='submit'>Submit<i className="fal fa-arrow-right"></i></button>
            </div>
        </form>
    )
}

export default ContactForm;