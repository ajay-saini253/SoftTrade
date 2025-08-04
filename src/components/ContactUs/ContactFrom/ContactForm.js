import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').matches(/^[aA-zZ\s]+$/, 'Only letters and spaces are allowed'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone is required').matches(/^[0-9()+-\s]+$/, 'Invalid phone number'),
  company: yup.string().required('Company name is required'),
  address: yup.string().required('Address is required'),
  country: yup.string().required('Country is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    reset(); // Reset form after submission
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-field">
            <label>Your name</label>
            <div className="input-box">
              <input type="text" className="form-control" {...register('name')} />
              <p className="errorMessage">{errors.name?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-field">
            <label>Email</label>
            <div className="input-box">
              <input type="email" className="form-control" {...register('email')} />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-field">
            <label>Phone</label>
            <div className="input-box">
              <input type="text" className="form-control" {...register('phone')} />
              <p className="errorMessage">{errors.phone?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-field">
            <label>Company name</label>
            <div className="input-box">
              <input type="text" className="form-control" {...register('company')} />
              <p className="errorMessage">{errors.company?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="input-field text-field">
            <label>Address</label>
            <div className="input-box">
              <input type="text" className="form-control" {...register('address')} />
              <p className="errorMessage">{errors.address?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="input-field text-field">
            <label>Country</label>
            <div className="input-box">
              <select className="form-control" {...register('country')}>
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
              </select>
              <p className="errorMessage">{errors.country?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-field text-field">
            <label>How can we help you today?</label>
            <div className="input-box">
              <textarea className="form-control" {...register('message')} />
              <p className="errorMessage">{errors.message?.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-btn">
        <button className="cp-btn w-100" type="submit">
          Submit <i className="fal fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
