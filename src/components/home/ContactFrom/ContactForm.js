import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces allowed'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  phone: yup.string()
    .required('Phone is required')
    .matches(/^[0-9()+-\s]+$/, 'Invalid phone number'),
  message: yup.string()
    .required('Message is required'),
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
    console.log('Form submitted:', data);
    reset(); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="row">

        <div className="col-lg-12">
          <div className="input-field">
            <label htmlFor="name">Enter your Name</label>
            <div className="input-box">
              <input
                type="text"
                className="form-control"
                {...register('name')}
              />
              <p className="errorMessage">{errors.name?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-field">
            <label htmlFor="email">Enter your Email</label>
            <div className="input-box">
              <input
                type="email"
                className="form-control"
                {...register('email')}
              />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-field">
            <label htmlFor="phone">Enter your Phone</label>
            <div className="input-box">
              <input
                type="text"
                className="form-control"
                {...register('phone')}
              />
              <p className="errorMessage">{errors.phone?.message}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-field text-field">
            <label htmlFor="message">Enter your Message</label>
            <div className="input-box">
              <textarea
                className="form-control"
                {...register('message')}
                placeholder="How can we help you?"
              />
              <p className="errorMessage">{errors.message?.message}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="cp-det-btn mt-20 d-grid">
        <button className="thm-btn thm-btn--devops" type="submit">
          Submit <i className="fal fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
