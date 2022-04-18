import React from 'react';

// Hooks 
import useCustomForm from '../components/hooks/useCustomForm';

import './styles/apply.css';

const Application = () => {
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
                        Fake Application Form
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
                                type="text"
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
                                name="email"
                                value={values.email} 
                                onChange={handleChange}
                                placeholder="Email"
                                required
                        />
                        <input 
                                className="input"
                                type="text"
                                name="phone"
                                value={values.phone} 
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                        />
                    </label>

                    <label className="input-container">
                        <input 
                                className="input"
                                type="text"
                                name="bday"
                                value={values.bday} 
                                onChange={handleChange}
                                placeholder="Birth Date"
                                required
                        />
                        <input 
                                className="input"
                                type="text"
                                name="ssn"
                                value={values.ssn} 
                                onChange={handleChange}
                                placeholder="Social Security Number"
                                required
                        />
                    </label>

                    <label className="input-container">
                        <input 
                                className="input"
                                type="text"
                                name="currAddress"
                                value={values.currAddress} 
                                onChange={handleChange}
                                placeholder="Current Address"
                                required
                        />

                        <select
                                className="select"
                                type="text"
                                name="state"
                                value={values.state} 
                                onChange={handleChange}
                                placeholder="state"
                                required    
                        >

                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>

                        </select> 
                    </label>

                    <label className="input-container">
                        <input 
                                className="input"
                                type="text"
                                name="zipcode"
                                value={values.zipcode} 
                                onChange={handleChange}
                                placeholder="Zipcode"
                                required
                        />
                        <input 
                                className="input"
                                type="text"
                                name="country"
                                value={values.country} 
                                onChange={handleChange}
                                placeholder="Country"
                                required
                        />
                    </label>
                    <input type="submit" value="Submit" class="form-btn button"/>
            </form>
        </div>
    </div>
  )
}

export default Application