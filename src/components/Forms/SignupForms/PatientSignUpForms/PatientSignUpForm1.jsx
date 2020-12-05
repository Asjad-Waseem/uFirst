// General Imports
import React, { useState, useRef } from 'react';
import '../../../Dashboards/DoctorDashboard/DashboardLayout/Layout.css';
import './PatientSignUpForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { submitPersonalDetails } from '../../../../Actions/patientSignUpFormActions';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// App Imports
import Navbar from '../../../GeneralHomeLayout/GeneralNavbar';

function PatientSignUpForm1() {

    const [ profileImage, setProfileImage ] = useState();
    const [ profileImageName, setProfileImageName ] = useState();
    const [ hUnit1, setHUnit1 ] = useState();
    const [ wUnit, setWUnit ] = useState();

    let profileImageNameFinal;

    if(profileImageName) {

     var finalIndex = profileImageName.lastIndexOf('.');
     var stringIndex = profileImageName.length;

     var profileImageNameInitial = profileImageName.substring(0, finalIndex);
     var fileType = profileImageName.substring(finalIndex, stringIndex);

     if(profileImageNameInitial.length > 20) {

        var profileImageNameInitial1 = profileImageNameInitial.substring(0, 20);
            profileImageNameFinal = profileImageNameInitial1 + fileType;

     }

     else if (profileImageNameInitial.length < 20) {

        profileImageNameFinal = profileImageNameInitial + fileType;

     }

    }

    const onFileChange = event => { 
     
        // Update the state 
        setProfileImage({ profileImage: URL.createObjectURL(event.target.files[0]) });
        setProfileImageName( event.target.files[0].name ) 

    }; 

    const onHeightUnitChange = (event) => { 
     
        // Update the state 
        setHUnit1( event.target.value ); 
       
    }; 

    const onWeightUnitChange = (event) => { 
     
        // Update the state 
        setWUnit( event.target.value ); 
       
    }; 

    let history = useHistory();

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

    const onSubmit = (patientData) => {

        // Create a formData object

        const formData = new FormData();
       
        // Update the formData object 
        formData.append("profileImage", patientData.profileImage[0]); 
       
        // Details of the uploaded file 
       
        let height;
        let weight;

        if(patientData.hUnit1 === "ft") {

        height = patientData.height1 + patientData.hUnit1 + " " + patientData.hUnit2 + "in"

        }
        else if (patientData.hUnit1 === "cm") {

        height = patientData.height1 + patientData.hUnit1

        }

        weight = patientData.weight1 + patientData.wUnit;

        const patientSignUpData = {

            firstName: patientData.firstName,
            lastName: patientData.lastName,
            userName: patientData.userName,
            email: patientData.email,
            password: patientData.password,
            confirmPassword: patientData.confirmPassword,
            phone: patientData.phone,
            ssn: patientData.ssn,
            city: patientData.city,
            medicalID: patientData.medicalID,
            state: patientData.state,
            country: patientData.country,
            profileImage: profileImage.profileImage,
            dateOfBirth: patientData.dateOfBirth,
            sex: patientData.sex,
            height: height,
            weight: weight

        }

        console.log(patientSignUpData);

        dipatch(submitPersonalDetails(patientSignUpData, history));

    }

    return (

        <div className="sign__up__1">
        <Navbar />
        <div className = "patient__signup01" style = {{marginTop: "70px"}}>
        <div className="container-fluid">
      
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <div className="row">
        <div className="col-md-8">

        <div className = "form__left" style = {{marginLeft: "40px", marginTop: "30px"}}>

        <h1 className = "form__heading">Personal Details</h1>

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

        <div className = "invalid-feedback text-danger">
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

        <div className = "invalid-feedback text-danger">
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

        <div className = "invalid-feedback text-danger">
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

        <div className = "invalid-feedback text-danger">
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

         <div className = "invalid-feedback text-danger">
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
   
         <div className = "invalid-feedback text-danger">

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
   
         <div className = "invalid-feedback text-danger">
         {errors.phone && errors.phone.type === "pattern" && <span>Phone should not include letters</span>}
         {errors.phone && errors.phone.type === "required" && <span>This field is required</span>}
         </div>

         </div>

         {/* SSN / Aadhar */}

         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="ssn">SSN / AADHAR</label>
         <input type = "text" name="ssn" placeholder = "SSN / Aadhar" ref={register({ required: true, 

         pattern: /^([0-9])(?!\1{2}-\1{2}-\1{4})[0-9]{2}-[0-9]{2}-[0-9]{4}$/i
                 
        })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.ssn,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-danger">
         {errors.ssn && errors.ssn.type === "required" && <span>This field is required</span>}
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
   
         <div className = "invalid-feedback text-danger">
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
   
         <div className = "invalid-feedback text-danger">
         {errors.medicalId && errors.medicalID.type === "required" && <span>This field is required</span>}
         </div>

         </div>
         </div>

         {/* State */}

         <div className = "form-row">
         <div className = "col-md-4 mb-3 mr-5">
      
         <label for="state">STATE</label>

         <input type = "text" name="state" placeholder = "State" ref={register({ required: true, pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.state,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-danger">
         {errors.state && errors.state.type === "required" && <span>This field is required</span>}
         {errors.state && errors.state.type === "pattern" && <span>State should only contain letters</span>}
         </div>

         </div>
         </div>

          {/* City */}

          <div className = "form-row ">
         <div className = "col-md-4 mb-3 mr-5">

         <label for="city">CITY</label>
         <input type = "text" name="city" placeholder = "City" ref={register({ required: true, pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.city,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-danger">
         {errors.city && errors.city.type === "required" && <span>This field is required</span>}
         {errors.city && errors.city.type === "pattern" && <span>City should only contain letters</span>}
         </div>

         </div>

         {/* Form Submit which moves you to Sign-up Page 2 */}
      
        <div className = "col-md-4" style = {{marginTop: "32px"}}>
        <input className = "btn btn-block text-light" type="submit" value = "NEXT" />
        </div>
        </div>
        </div>
        </div>

        <div className = "form__division col-md-4">

            <div className = "division__02" style = {{marginTop: "30px"}}>

        {/* Profile Image */}

        <div className = "form-group">

            <div className = "col-md-9">

                {!profileImage ?

                <AccountCircleIcon style = {{width: "200px", height: "200px"}}/>

                :

                <img src = {profileImage.profileImage} style = {{width: "200px", height: "200px", borderRadius: "50%"}}/>
                
                }

                <label> 
                <div className = "btn text-light mt-1" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                UPLOAD
                </div>
                <input name = "profileImage" type="file" onChange = {onFileChange} ref = {register} style={{display: "none"}}/>
                </label>  

                <div className = "file__preview">

                    {profileImageNameFinal}

                </div>

                {/* <input name = "profileImage" type = "file" onChange = {onFileChange} ref = {register} /> */}

            </div>
         </div>

         {/* Date of Birth */}

         <div className = "form-group">

         <div className = "col-md-9">

         <label for="dateOfBirth">DATE OF BIRTH</label>

         <input type = "date" name="dateOfBirth" ref={register({ required: true })}
      
         className = {classnames("form-control form-control-md", {
      
         "is-invalid": errors.dateOfBirth,
      
         })}
         /> 
   
         <div className = "invalid-feedback text-danger">
         {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>This field is required</span>}
         </div>
   
            </div>
         </div>

         {/* SEX */}

         <div className = "form-group">

         <div className = "col-md-9">

         <label for="sex">SEX</label>

         <select id="sex" name = "sex" ref={register({ required: true })}

         className = {classnames("form-control form-control-md", {

         "is-invalid": errors.sex,

         })}>

         <option value = "">Please select your gender</option>

         <option value = "Male">Male</option>
         <option value = "Female">Female</option> 
         <option value = "Other">Other</option>
         <option value = "Prefer not to say">Prefer not to say</option>

         </select>

         <div className = "invalid-feedback text-danger">
         {errors.sex && errors.sex.type === "required" && <span>This field is required</span>}
         </div>

           </div>
         </div>

         {/* Height */}

         {/* We are dividing height into 3 fields. 
         
         (1). One is height1 which will represent the value for the Main Height unit (i.e. Feet or Cm)
         (2). Second is hUnit1 which is the Main Unit for the Height
         (3). Third is hUnit2 which is the Secondary Unit, applied only in case if the user selects Feet as the Main Height Unit

         We will combine all of these units to submit the final user height.  */}

         <div className = "form-group">

         <div className = "col-md-9">

          {/* height1 */}

         <label for="height1">HEIGHT</label>

         <input type = "number" name="height1" placeholder = "Height" ref={register({ required: true, min: 1, max: hUnit1 === "ft" ? 12 : 275 })}

         className = {classnames("form-control form-control-md", {

         "is-invalid": errors.height1,

         })}
         /> 

         <div className = "invalid-feedback text-danger">
         {errors.height1 && errors.height1.type === "required" && <span>This field is required</span>}
         {errors.height1 && <span> {hUnit1 === "ft" ? "Height cannot exceed 9 Feet" : hUnit1 === "cm" ? "Centimers cannot exceed 275 Centimeters": "Please select a unit also" }</span>}
         </div>

         {/* hUnit1 */}

         <input type="radio" id="feet" name="hUnit1" value="ft" ref = { register } onChange = {onHeightUnitChange} />
         <label className = "ml-2" for="feet">Feet</label>

         <input className = "ml-2" type="radio" id="cm" name="hUnit1" value="cm" ref = { register } onChange = {onHeightUnitChange} />
         <label className = "ml-2" for="cm">Centimeters</label>

         <div className = "invalid-feedback text-danger">
         {errors.hUnit1 && errors.hUnit1.type === "required" && <span>This field is required</span>}
         </div>

         {/* hUnit2 only in case if the user selects Feet as the main height unit.*/}

         {hUnit1 === "ft" ? 

         <div>
         <label for="hUnit2">INCHES</label>

         <input type = "number" name="hUnit2" placeholder = "Mention inches, e.g. 6" ref={register({ required: true })}

         className = {classnames("form-control form-control-md", {

         "is-invalid": errors.hUnit2,

         })}
         /> 

         <div className = "invalid-feedback text-danger">
         {errors.hUnit2 && errors.hUnit2.type === "required" && <span>This field is required</span>}
         </div>

        </div>

        : null}

           </div>
         </div>

         {/* Weight done in the same format as height apart from the exception that there's no Secondary Unit and only two main units, i.e. KG and Pounds. */}

         <div className = "form-group">

         <div className = "col-md-9">

        {/* Main Weight */}

         <label for="weight">WEIGHT</label>

         <input type = "number" name="weight1" placeholder = "Weight" ref={register({ required: true, min: 1, max: wUnit === "kg" ? 200 : 440 })}

         className = {classnames("form-control form-control-md", {

         "is-invalid": errors.weight1,

         })}
         /> 

         <div className = "invalid-feedback text-danger">
         {errors.weight1 && errors.weight1.type === "required" && <span>This field is required</span>}
         {errors.weight1 && <span> {wUnit === "kg" ? "KG Weight cannot exceed 200" : wUnit === "lb" ? "Pound Weight cannot exceed 400": "Please select a unit also" }</span>}
         </div>

         {/* wUnit */}

         <input type="radio" id="kilograms" name="wUnit" value="kg" ref = { register } onChange = {onWeightUnitChange} />
         <label className = "ml-2" for="kilograms">Kilograms</label>

         <input className = "ml-2" type="radio" id="pounds" name="wUnit" value="lb" ref = { register }onChange = {onWeightUnitChange} />
         <label className = "ml-2" for="pounds">Pounds</label>

         <div className = "invalid-feedback text-danger">
         {errors.wUnit && errors.wUnit.type === "required" && <span>This field is required</span>}
         </div>

           </div>
         </div>
         </div>

         </div>
            
        </div>

        </form>
        </div>
       
        </div>
        </div>
            
    )
}

export default PatientSignUpForm1;
