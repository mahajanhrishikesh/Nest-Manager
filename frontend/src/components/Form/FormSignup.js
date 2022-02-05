import React from 'react';
import validate from './validateInfo'
import useForm from './useForm';
import './Form.css';

const FormSignup = ({submitForm}) => {

    const { handleChange, handleSubmit, values,  errors } = useForm(submitForm, validate);

  return (
    <div className="form-content-right">
        <form onSubmit= {handleSubmit} className="form" noValidate>
            <h1>
                Get Started with us today!
                Apply to our homes by filling out the information below.
            </h1>
            <div className="form-inputs">
                <label className="form-label">
                    Name
                </label>
                    <input
                     type="text"
                     name='name' 
                     className='form-input'
                     placeholder="Enter your name"
                     value = {values.name}
                     onChange = {handleChange}
                    />
                {errors.name && <p>{errors.name}</p> }
            </div>
            <div className="form-inputs">
                <label className="form-label">
                    Email
                </label>
                    <input 
                    type="email" 
                    name='email' 
                    className='form-input'
                    placeholder="Enter your email"
                    value = {values.email}
                    onChange = {handleChange}
                    />
                {errors.email && <p>{errors.email}</p> }
            </div>
            <div className="form-inputs">
                <label className="form-label">
                    Floorplan Choice
                </label>
                    <input 
                    type="text" 
                    name='floorplan' 
                    className='form-input'
                    placeholder="Enter Floor Plan Choice"
                    value = {values.floorplan}
                    onChange = {handleChange}
                    />
                {errors.floorplan && <p>{errors.floorplan}</p> }
            </div>
            <div className="form-inputs">
                <label className="form-label">
                    Lease Term Desired
                </label>
                    <input 
                    type="text" 
                    name='Leaseterm' 
                    className='form-input'
                    placeholder="Select lease term period"
                    value = {values.Leaseterm}
                    onChange = {handleChange}
                    />
                {errors.leaseterm && <p>{errors.leaseterm}</p> }
            </div>
        <button className="form-input-btn" type="submit">Apply</button>
        <span className="form-input-login">
            Already a tenant? Login <a href='/Login'>here</a>
        </span>
        </form>
    </div>
  );
};

export default FormSignup;
