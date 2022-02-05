import React, { useState} from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useCallback } from 'react';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])


  return( 
    <>
    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='img/img-3.jpg' alt='spaceship' />
      </div>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  </>
     
  );
};

export default Form;
