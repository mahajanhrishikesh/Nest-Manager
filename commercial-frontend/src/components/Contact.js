import React from 'react'
import useCustomForm from '../components/hooks/useCustomForm';

const Contact = () => {
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        bday: "",
        ssn: "",
        currAddress: "",
        state: "",
        zipcode: "",
        country: "",
      };

  const {
        values,
        handleChange,
        handleSubmit
      } = useCustomForm({ 
            initialValues, 
            onSubmit: values => console.log({ values })
        });
        
  return (
    <div className="container">
        <div className="form-container">
            <div className="title">
                <h2>
                        Fake Contact Form
                </h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label className="input-container">
                        <input 
                            className="input"
                            type="text"
                            name="firstname"
                            value={values.firstname} 
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                        <input 
                            className="input"
                            type="name"
                            name="lastname"
                            value={values.lastname} 
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                        />

                </label>

                <label className="input-container">
                        <input 
                            className="input"
                            type="text"
                            name="phone"
                            value={values.phone} 
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                        />
                        <input 
                            className="input"
                            type="email"
                            name="email"
                            value={values.email} 
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                </label>

                <input type="submit" value="Submit" class="form-btn button"/>
            </form>
            <div className="small-text">
                <p>
                        Give us ∞ hours to get back to you!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact