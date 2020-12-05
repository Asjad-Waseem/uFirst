import React, { useState, useRef } from 'react';
import '../../../Dashboards/DoctorDashboard/DashboardLayout/Layout.css';
import { useSelector, useDispatch } from 'react-redux';
import { submitPersonalDetails } from '../../../../Actions/patientSignUpFormActions';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import Navbar from '../../../Dashboards/DoctorDashboard/DashboardLayout/NavBar';
import Sider from '../../../Dashboards/DoctorDashboard/DashboardLayout/Sider';

function Testing() {

    // const [ country, setCountry ] = useState("");
    // const [ region, setRegion ] = useState("");

    const collapsed = useSelector(state => state.collapsed.collapsed);

    // const selectCountry = (val) => {

    //     setCountry({country: val})

    //     console.log(country.country);

    // }

    // const selectRegion = (val) => {

    //     setRegion({region: val})

    //     console.log(region);

    // }

    let history = useHistory();

    // const info = useSelector(state => state.auth.user)
    const dipatch = useDispatch();

    const { register, handleSubmit, errors, watch } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    let passwordStrength = "";

    if(password.current.length > 0 && password.current.length < 6) {

        passwordStrength = "Password should be 6-20 characters with at least One Upper, One Lower, One Numeric, and One Special Character";

    }

    else if(password.current.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/)) {

        passwordStrength = "Weak";

    }

    else if(password.current.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{9,10}$/)) {

        passwordStrength = "Fair";

    }

    else if(password.current.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{11,12}$/)) {

        passwordStrength = "Good";

    }

    else if(password.current.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{13,20}$/)) {

        passwordStrength = "Strong";

    }

    else if(password.current.length > 20) {

        passwordStrength = "Password should not exceed 20 characters";

    }

    const onSubmit = patientData => dipatch(submitPersonalDetails(patientData, history));

    // console.log(info);

    return (

        <div className="login">
        <Navbar />
        <Sider />
        <div className = {collapsed === true ? "page-content" : "page-content-open"}>
        <div className="container-fluid ml-2" style = {{backgroundColor: "red"}}>
        {/* <div className="row" style = {{backgroundColor: "yellow"}}> */}
        {/* <div className="col-md-12" style = {{backgroundColor: "pink"}}> */}

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <div className = "row">

        <div className = "col-md-8" style = {{backgroundColor: "red"}}>

        {/* First Name */}

        <div className = "form-row">

        <div className = "col-md-4 mb-3 mr-5">
        
        {/* register your input into the hook by invoking the "register" function */}
        <label for="firstName">FIRST NAME</label>
        <input type = "text" name="firstName" id = "firstName" placeholder = "First Name" ref={register({required: true, pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
        className = {classnames("form-control form-control-md", {

        "is-invalid": errors.firstName,

        })}
        />

        {/* errors will return when field validation fails  */}

        <div className = "invalid-feedback text-dark">
        {errors.firstName && errors.firstName.type === "required" && <span>This field is required</span>}
        {errors.firstName && errors.firstName.type === "pattern" && <span>First Name should only have letters</span>}
        </div>
        </div>

        {/* Last Name */}

        <div className = "col-md-4 mb-3 mr-5">

        <label for="lastName">LAST NAME</label>
        <input type = "text" name="lastName" id = "lastName" placeholder = "Last Name" ref={register({required: true, pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
        className = {classnames("form-control form-control-md", {

        "is-invalid": errors.lastName,

        })}
        />

        <div className = "invalid-feedback text-dark">
        {errors.lastName && errors.lastName.type === "required" && <span>This field is required</span>}
        {errors.lastName && errors.lastName.type === "pattern" && <span>Last Name should only have letters</span>}
        </div>
        </div>
        </div>

        {/* Username */}

        <div className = "form-row">
        <div className = "col-md-4 mb-3 mr-5">

        <label for="userName">USERNAME</label>

        <div class="input-group is-invalid">
        <div class="input-group-prepend">
        <span class="input-group-text" id="validatedInputGroupPrepend">@</span>
        </div>
        <input type = "text" name="userName" id = "userName" placeholder = "Username" ref={register({required: true})}
        aria-describedby="abc" 
        className = {classnames("form-control form-control-md", {

        "is-invalid": errors.userName,

        })}
        />
        </div>

        <div className = "invalid-feedback text-dark">
        {errors.userName && errors.userName.type === "required" && <span>This field is required</span>}
        </div>
        </div>

        {/* Email */}

        <div className = "col-md-4 mb-3 mr-5">

        <label for="email">EMAIL</label>
        <input type = "email" name="email" id = "email" placeholder = "Email" ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} 
        className = {classnames("form-control form-control-md", {

            "is-invalid": errors.email,
        })}
        />

        <div className = "invalid-feedback text-dark">
        {errors.email && errors.email.type === "required" && <span>This field is required</span>}
        {errors.email && errors.email.type === "pattern" && <span>Email should have "@" and "." at the correct places</span>}
        </div>
        </div>
        </div>

        {/* Password */}

        <div className = "form-row">
        <div className = "col-md-4 mb-3 mr-5">
      
        <label for="password">PASSWORD</label>
        <input type = "password" name="password" placeholder = "Password" ref={register({ required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/i})}
         className = {classnames("form-control form-control-md", {
      
        "is-invalid": errors.password,
      
         })}
         /> 

         <p className = "text-dark">{passwordStrength}</p>

         <div className = "invalid-feedback text-dark">
         {errors.password && errors.password.type === "required" && <span>This field is required</span>}
         {errors.password && errors.email.type === "pattern" && <span>Password should be 6-20 characters with at least One Upper, One Lower, One Numeric, and One Special Character</span>}
         </div>

         {/* {info === "Incorrect Email Or Password" ? 
         <span>Incorrect Email or Password</span>
         : null} */}
         </div>

         {/* Confirm Password */}

         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="confirmPassword">CONFIRM PASSWORD</label>
         <input type = "password" name="confirmPassword" placeholder = "Confirm Password" ref={register({ required: true,
         validate: value =>
          value === password.current || "The passwords do not match"
         })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.confirmPassword,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">

         {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

         {errors.confirmPassword && errors.confirmPassword.type === "required" && <span>This field is required</span>}
         </div>

         </div>
         </div>

         {/* Phone */}

         <div className = "form-row">
         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="phone">PHONE</label>
         <input type = "phone" name="phone" placeholder = "Phone" ref={register({ required: true, pattern: /^[^a-zA-Z]*$/ })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.phone,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">
         {errors.phone && errors.phone.type === "pattern" && <span>Phone should not include letters</span>}
         {errors.phone && errors.phone.type === "required" && <span>This field is required</span>}
         </div>

         </div>

         {/* SSN / Aadhar */}

         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="ssn">SSN / AADHAR</label>
         <input type = "text" name="ssn" placeholder = "SSN / Aadhar" ref={register({ required: true, 
         
        //  pattern: /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/i 
        
        })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.ssn,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">
         {/* {errors.ssn && errors.ssn.type === "required" && <span>This field is required</span>} */}
         {errors.ssn && errors.ssn.type === "pattern" && <span>SSN should have 9 Digits, each being seperated by a hyphen (-), e.g. 856-45-6789</span>}
         </div>

         </div>
         </div>

         {/* Country */}

         <div className = "form-row" style = {{display: "flex", direction: "row", flex: "1"}}>
         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="country">COUNTRY</label>

         <select id="country" name = "country" ref={register({ required: true })}

         className = {classnames("form-control form-control-md", {
      
        "is-invalid": errors.country,
 
         })}>

         <option value = "">Please select a Country</option>
         <option value = "India">India</option>
         <option value = "US">US</option>
         <option value = "UK">UK</option>

         </select>
   
         <div className = "invalid-feedback text-dark">
         {errors.country && errors.country.type === "required" && <span>This field is required</span>}
         </div>

         </div>

         {/* Medical ID */}

         <div className = "col-md-4 mb-3 mr-5">

         <label for="medicalID">MEDICAL ID</label>
         <input type = "text" name="medicalID" placeholder = "Medical ID" ref={register({ required: true })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.medicalID,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">
         {errors.medicalId && errors.medicalID.type === "required" && <span>This field is required</span>}
         </div>

         </div>
         </div>

         {/* State */}

         <div className = "form-row">
         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="state">STATE</label>

         {/* <div>

         <CountryDropdown
          value={country.country}
          whitelist = {[ "US", "CA", "IN" ]}
          priorityOptions = {[ "IN", "US", "CA" ]}
          onChange={(val) => selectCountry(val)} />

         <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} />

          </div> */}

         <input type = "text" name="state" placeholder = "State" ref={register({ required: true })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.state,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">
         {errors.state && errors.state.type === "required" && <span>This field is required</span>}
         </div>

         </div>
         </div>

          {/* City */}

          <div className = "form-row ">
         <div className = "col-md-4 mb-3 mr-5">

         <label for="city">CITY</label>
         <input type = "text" name="city" placeholder = "City" ref={register({ required: true })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.city,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-dark">
         {errors.city && errors.city.type === "required" && <span>This field is required</span>}
         </div>
         </div>  
             
        <div className = "col-md-4" style = {{marginTop: "35px"}}>
        <input type="submit" value = "Next"/>
        </div>
        </div>
        </div>

        <div className = "col-md-4" style = {{backgroundColor: "black"}}>
            <p>Hi</p>
        </div>
        </div>
        </form>
        </div>
        </div>


       
        </div>
        // </div>
        // </div>
            
    )
}

export default Testing;
