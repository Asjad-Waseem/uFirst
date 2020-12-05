// General Imports
import React, { useState, useRef } from 'react';
import '../../../Dashboards/DoctorDashboard/DashboardLayout/Layout.css';
import './PatientSignUpForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { submitPersonalDetails } from '../../../../Actions/patientSignUpFormActions';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

// App Imports
import Navbar from '../../../GeneralHomeLayout/GeneralNavbar';

function PatientSignUpForm2() {

    let abc;

    const [ allergyDoc1, setAllergyDoc1 ] = useState();
    const [ allergyDoc1Name, setAllergyDoc1Name ] = useState();

    const [ vaccineDoc1, setVaccineDoc1 ] = useState();
    const [ vaccineDoc1Name, setVaccineDoc1Name ] = useState();

    const [ surgeryDoc1, setSurgeryDoc1 ] = useState();
    const [ surgeryDoc1Name, setSurgeryDoc1Name ] = useState();

    const [ hereditaryDoc1, setHereditaryDoc1 ] = useState();
    const [ hereditaryDoc1Name, setHereditaryDoc1Name ] = useState();

    const [ healthDoc1, setHealthDoc1 ] = useState();
    const [ healthDoc1Name, setHealthDoc1Name ] = useState();

    const { register, handleSubmit, errors, watch } = useForm();

    const form1Data =  useSelector(state => state.patientSignUpForm.form1Data);

    console.log(form1Data);

    let history = useHistory();

    const dipatch = useDispatch();

    // const allergyType = watch("allergyType");

    // Defining variables for performing the name trim function for the selected file based on it's name length

    let allergyDoc1NameFinal;
    let vaccineDoc1NameFinal;
    let surgeryDoc1NameFinal;
    let hereditaryDoc1NameFinal;
    let healthDoc1NameFinal;

    // Name trim function for Allergy Doc1

    if(allergyDoc1Name) {

     var finalAD1Index = allergyDoc1Name.lastIndexOf('.');
     var stringAD1Index = allergyDoc1Name.length;

     var allergyDoc1NameInitial = allergyDoc1Name.substring(0, finalAD1Index);
     var fileAD1Type = allergyDoc1Name.substring(finalAD1Index, stringAD1Index);

     if(allergyDoc1NameInitial.length > 20) {

        var allergyDoc1NameInitial1 = allergyDoc1NameInitial.substring(0, 20);
            allergyDoc1NameFinal = allergyDoc1NameInitial1 + fileAD1Type;

     }

     else if (allergyDoc1NameInitial.length < 20) {

        allergyDoc1NameFinal = allergyDoc1NameInitial + fileAD1Type;

     }

    }

    // Name trim function Vaccine Doc 1

    if(vaccineDoc1Name) {

        var finalVD1Index = vaccineDoc1Name.lastIndexOf('.');
        var stringVD1Index = vaccineDoc1Name.length;
   
        var vaccineDoc1NameInitial = vaccineDoc1Name.substring(0, finalVD1Index);
        var fileVD1Type = vaccineDoc1Name.substring(finalVD1Index, stringVD1Index);
   
        if(vaccineDoc1NameInitial.length > 20) {
   
           var vaccineDoc1NameInitial1 = vaccineDoc1NameInitial.substring(0, 20);
               vaccineDoc1NameFinal = vaccineDoc1NameInitial1 + fileVD1Type;
   
        }
   
        else if (vaccineDoc1NameInitial.length < 20) {
   
           vaccineDoc1NameFinal = vaccineDoc1NameInitial + fileVD1Type;
   
        }
   
       }

    // Name trim function for Surgery Doc 1

    if(surgeryDoc1Name) {

        var finalSD1Index = surgeryDoc1Name.lastIndexOf('.');
        var stringSD1Index = surgeryDoc1Name.length;
   
        var surgeryDoc1NameInitial = surgeryDoc1Name.substring(0, finalSD1Index);
        var fileSD1Type = surgeryDoc1Name.substring(finalSD1Index, stringSD1Index);
   
        if(surgeryDoc1NameInitial.length > 20) {
   
           var surgeryDoc1NameInitial1 = surgeryDoc1NameInitial.substring(0, 20);
               surgeryDoc1NameFinal = surgeryDoc1NameInitial1 + fileSD1Type;
   
        }
   
        else if (surgeryDoc1NameInitial.length < 20) {
   
           surgeryDoc1NameFinal = surgeryDoc1NameInitial + fileSD1Type;
   
        }
   
       }

    // Name trim function for Hereditary Disease Doc 1

    if(hereditaryDoc1Name) {

        var finalHD1Index = hereditaryDoc1Name.lastIndexOf('.');
        var stringHD1Index = hereditaryDoc1Name.length;
   
        var hereditaryDoc1NameInitial = hereditaryDoc1Name.substring(0, finalHD1Index);
        var fileHD1Type = hereditaryDoc1Name.substring(finalHD1Index, stringHD1Index);
   
        if(hereditaryDoc1NameInitial.length > 20) {
   
           var hereditaryDoc1NameInitial1 = hereditaryDoc1NameInitial.substring(0, 20);
               hereditaryDoc1NameFinal = hereditaryDoc1NameInitial1 + fileHD1Type;
   
        }
   
        else if (hereditaryDoc1NameInitial.length < 20) {
   
           hereditaryDoc1NameFinal = hereditaryDoc1NameInitial + fileHD1Type;
   
        }
   
       }

    // Name trim for Health Data Doc 1

    if(healthDoc1Name) {

        var finalHDD1Index = healthDoc1Name.lastIndexOf('.');
        var stringHDD1Index = healthDoc1Name.length;
   
        var healthDoc1NameInitial = healthDoc1Name.substring(0, finalHDD1Index);
        var fileHDD1Type = healthDoc1Name.substring(finalHDD1Index, stringHDD1Index);
   
        if(healthDoc1NameInitial.length > 20) {
   
           var healthDoc1NameInitial1 = healthDoc1NameInitial.substring(0, 20);
               healthDoc1NameFinal = healthDoc1NameInitial1 + fileHDD1Type;
   
        }
   
        else if (healthDoc1NameInitial.length < 20) {
   
           healthDoc1NameFinal = healthDoc1NameInitial + fileHDD1Type;
   
        }
   
       }

    const onAllergyFileChange = event => { 
     
        // Update the state 
        setAllergyDoc1({ allergyDoc1: URL.createObjectURL(event.target.files[0]) });
        setAllergyDoc1Name( event.target.files[0].name ) 

        // abc = event.target.files[0];

        // console.log(abc);

        // var reader = new FileReader();

        // if(abc) {

        //     reader.readAsDataURL(abc);
        //     reader.onload = () => {

        //         var base64 = reader.result;
        //         abc = base64;

        //         console.log(abc);

        //     }


        // }

    }; 

    const onVaccineFileChange = event => { 
     
        // Update the state 
        setVaccineDoc1({ vaccineDoc1: URL.createObjectURL(event.target.files[0]) });
        setVaccineDoc1Name( event.target.files[0].name ) 

    }; 

    const onSurgeryFileChange = event => { 
     
        // Update the state 
        setSurgeryDoc1({ surgeryDoc1: URL.createObjectURL(event.target.files[0]) });
        setSurgeryDoc1Name( event.target.files[0].name ) 

    }; 

    const onHereditaryFileChange = event => { 
     
        // Update the state 
        setHereditaryDoc1({ hereditaryDoc1: URL.createObjectURL(event.target.files[0]) });
        setHereditaryDoc1Name( event.target.files[0].name ) 

    }; 

    const onHealthFileChange = event => { 
     
        // Update the state 
        setHealthDoc1({ healthDoc1: URL.createObjectURL(event.target.files[0]) });
        setHealthDoc1Name( event.target.files[0].name ) 

    }; 

    const onSubmit = (patientData) => {

        
    }

    return (
        <div className = "sign__up__2">
        <Navbar />      

        <div className = "patient__signup01" style = {{marginTop: "70px"}}>
        <div className="container-fluid">
      
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <div className="row">
        <div className="col-md-6">

        <div className = "form__left" style = {{marginTop: "30px"}}>

            {/* {allergyDoc1 ?

            <img src = {abc} />

            : null} */}

            {/* Allergies */}

            <div className = "generic__border col">

                <div className = "generic__header">

                <h1 className = "form__heading" style = {{flex: "1", paddingTop: "10px"}}>ALLERGIES</h1>
                <AddIcon style = {{marginTop: "15px", height: "30px", width: "30px", color: "#0060bf"}}/>

                </div>
            
                {/* NAME, TYPE, CAUSE */}

                {/* Name */}

                <div className = "form-row">

                <div className = "col-md-4 mb-3">

                {/* register your input into the hook by invoking the "register" function */}
                <label for="allergyName">NAME</label>
                <input type = "text" name="allergyName" id = "allergyName" placeholder = "Name" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i})} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.allergyName,

                })}
                />

                {/* errors will return when field validation fails  */}

                <div className = "invalid-feedback text-danger">
                {errors.allergyName && errors.allergyName.type === "pattern" && <span>Name should only have letters</span>}
                </div>
                </div>

                {/* Type */}

                <div className = "col-md-4 mb-3">

                <label for="allergyType">TYPE</label>
                <input type = "text" name="allergyType" id = "allergyType" placeholder = "Type" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.allergyType,

                })}
                />

                <div className = "invalid-feedback text-danger">
                {errors.allergyType && errors.allergyType.type === "pattern" && <span>Type should only have letters</span>}
                </div>
                </div>

                 {/* Cause */}

                 <div className = "col-md-4 mb-3">

                 <label for="allergyCause">CAUSE</label>
                 <input type = "text" name="allergyCause" id = "allergyCause" placeholder = "Cause" ref={register} 
                 className = {classnames("form-control form-control-md", {

                 "is-invalid": errors.allergyCause,

                 })}
                 />

                 <div className = "invalid-feedback text-danger">
                 </div>
                 </div>

                  {/* Relevant Documents */}

                  <div className = "col-md-4">

                  <label for="relevantDocuments">RELEVANT DOCUMENTS</label>

                  </div>

                  {/* Upload */}

                  <div className = "col-md-4 mb-3">

                  <label> 
                  <div className = "btn text-light" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                  UPLOAD
                  </div>
                  <input name = "allergyDoc1" type="file" onChange = {onAllergyFileChange} ref = {register} style={{display: "none"}}/>
                  </label>  

                  <div className = "file__preview">

                    {allergyDoc1NameFinal}

                  </div>
                  </div>


                </div>

            </div>

            <br />

            {/* Vaccines */}

            <div className = "generic__border col">

                <div className = "generic__header">

                <h1 className = "form__heading" style = {{flex: "1", paddingTop: "10px"}}>VACCINES</h1>
                <AddIcon style = {{marginTop: "15px", height: "30px", width: "30px", color: "#0060bf"}} />

                </div>

                 {/* NAME, TYPE, DATE */}

                {/* Name */}

                <div className = "form-row">

                <div className = "col-md-4 mb-3">

                {/* register your input into the hook by invoking the "register" function */}
                <label for="vaccineName">NAME</label>
                <input type = "text" name="vaccineName" id = "allergyName" placeholder = "Name" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.vaccineName,

                })}
                />

                {/* errors will return when field validation fails  */}

                <div className = "invalid-feedback text-danger">
                {errors.vaccineName && errors.vaccineName.type === "pattern" && <span>Name should only have letters</span>}
                </div>
                </div>

                {/* Type */}

                <div className = "col-md-4 mb-3">

                <label for="vaccineType">TYPE</label>
                <input type = "text" name="vaccineType" id = "vaccineType" placeholder = "Type" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.vaccineType,

                })}
                />

                <div className = "invalid-feedback text-danger">
                {errors.vaccineType && errors.vaccineType.type === "pattern" && <span>Type should only have letters</span>}
                </div>
                </div>

                 {/* Date */}

                 <div className = "col-md-4 mb-3">

                 <label for="vaccineDate">DATE</label>
                 <input type = "date" name="vaccineDate" id = "vaccineDate" ref={register} 
                 className = {classnames("form-control form-control-md", {

                 "is-invalid": errors.vaccineDate,

                 })}
                 />

                 <div className = "invalid-feedback text-danger">
                 </div>
                 </div>

                  {/* Relevant Documents */}

                  <div className = "col-md-4">

                  <label for="relevantDocuments">RELEVANT DOCUMENTS</label>

                  </div>

                  {/* Upload */}

                  <div className = "col-md-4 mb-3">

                  <label> 
                  <div className = "btn text-light" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                  UPLOAD
                  </div>
                  <input name = "vaccineDoc1" type="file" onChange = {onVaccineFileChange} ref = {register} style={{display: "none"}}/>
                  </label>  

                  <div className = "file__preview">

                    {vaccineDoc1NameFinal} 

                  </div>
                  </div>

            </div>
            </div>

            <br />

            {/* Surgeries */}

            <div className = "generic__border col">

                <div className = "generic__header">

                <h1 className = "form__heading" style = {{flex: "1", paddingTop: "10px"}}>SURGERIES</h1>
                <AddIcon style = {{marginTop: "15px", height: "30px", width: "30px", color: "#0060bf"}} />

                </div>

                {/* PLACE, TYPE, DATE */}

                {/* Place */}

                <div className = "form-row">

                <div className = "col-md-4 mb-3">

                {/* register your input into the hook by invoking the "register" function */}
                <label for="surgeryPlace">PLACE</label>
                <input type = "text" name="surgeryPlace" id = "surgeryPlace" placeholder = "Place" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.surgeryPlace,

                })}
                />

                {/* errors will return when field validation fails  */}

                <div className = "invalid-feedback text-danger">
                {errors.surgeryPlace && errors.surgeryPlace.type === "pattern" && <span>Place should only have letters</span>}
                </div>
                </div>

                {/* Type */}

                <div className = "col-md-4 mb-3">

                <label for="surgeryType">TYPE</label>
                <input type = "text" name="surgeryType" id = "surgeryType" placeholder = "Type" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.surgeryType,

                })}
                />

                <div className = "invalid-feedback text-danger">
                {errors.surgeryType && errors.surgeryType.type === "pattern" && <span>Type should only have letters</span>}
                </div>
                </div>

                 {/* Date */}

                 <div className = "col-md-4 mb-3">

                 <label for="surgeryDate">DATE</label>
                 <input type = "date" name="surgeryDate" id = "surgeryDate" ref={register} 
                 className = {classnames("form-control form-control-md", {

                 "is-invalid": errors.suurgeryDate,

                 })}
                 />

                 <div className = "invalid-feedback text-danger">
                 </div>
                 </div>

                  {/* Relevant Documents */}

                  <div className = "col-md-4">

                  <label for="relevantDocuments">RELEVANT DOCUMENTS</label>

                  </div>

                  {/* Upload */}

                  <div className = "col-md-4 mb-3">

                  <label> 
                  <div className = "btn text-light" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                  UPLOAD
                  </div>
                  <input name = "surgeryDoc1" type="file" onChange = {onSurgeryFileChange} ref = {register} style={{display: "none"}}/>
                  </label>  

                  <div className = "file__preview">

                    {surgeryDoc1NameFinal} 

                  </div>
                  </div>
                
            </div>
            </div>
        
        </div>
        </div>

        {/* Form Right */}

        <div className="col-md-6">

        <div className = "form__right" style = {{marginTop: "30px"}}>

        {/* Hereditary Diseases */}

        <div className = "generic__border col">

            <div className = "generic__header">

            <h1 className = "form__heading" style = {{flex: "1", paddingTop: "10px"}}>HEREDITARY DISEASES</h1>
            <AddIcon style = {{marginTop: "15px", height: "30px", width: "30px", color: "#0060bf"}} />

            </div>

             {/* RELATION, DISEASE, UFIRST ID */}

                {/* Relation */}

                <div className = "form-row">

                <div className = "col-md-4 mb-3">

                {/* register your input into the hook by invoking the "register" function */}
                <label for="hereditaryRelation">RELATION</label>
                <input type = "text" name="hereditaryRelation" id = "hereditaryRelation" placeholder = "Relation" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.hereditaryRelation,

                })}
                />

                {/* errors will return when field validation fails  */}

                <div className = "invalid-feedback text-danger">
                {errors.hereditaryRelation && errors.hereditaryRelation.type === "pattern" && <span>First Name should only have letters</span>}
                </div>
                </div>

                {/* Disease */}

                <div className = "col-md-4 mb-3">

                <label for="hereditaryDisease">DISEASE</label>
                <input type = "text" name="hereditaryDisease" id = "hereditaryDisease" placeholder = "Disease" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.hereditaryDisease,

                })}
                />

                <div className = "invalid-feedback text-danger">
                {errors.hereditaryDisease && errors.hereditaryDisease.type === "pattern" && <span>Disease Name should only have letters</span>}
                </div>
                </div>

                 {/* UFirst ID */}

                 <div className = "col-md-4 mb-3">

                 <label for="uFirstID">UFIRST ID</label>
                 <input type = "text" name="uFirstID" id = "uFirstID" placeholder = "uFirstID" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                 className = {classnames("form-control form-control-md", {

                 "is-invalid": errors.uFirstID,

                 })}
                 />

                 <div className = "invalid-feedback text-danger">
                 {errors.uFirstID && errors.uFirstID.type === "pattern" && <span>uFirst ID should only have letters</span>}
                 </div>
                 </div>

                  {/* Relevant Documents */}

                  <div className = "col-md-4">

                  <label for="relevantDocuments">RELEVANT DOCUMENTS</label>

                  </div>

                  {/* Upload */}

                  <div className = "col-md-4 mb-3">

                  <label> 
                  <div className = "btn text-light" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                  UPLOAD
                  </div>
                  <input name = "hereditaryDoc1" type="file" onChange = {onHereditaryFileChange} ref = {register} style={{display: "none"}}/>
                  </label>  

                  <div className = "file__preview">

                    {hereditaryDoc1NameFinal} 

                  </div>
                  </div>

        </div>
        </div>

        <br />

        {/* Health Data */}

        <div className = "generic__border col">

            <div className = "generic__header">

            <h1 className = "form__heading" style = {{flex: "1", paddingTop: "10px"}}>HEALTH DATA</h1>
            <AddIcon style = {{marginTop: "15px", height: "30px", width: "30px", color: "#0060bf"}} />

            </div>

             {/* NAME, VALUE, SINCE */}

                {/* Name */}

                <div className = "form-row">

                <div className = "col-md-4 mb-3">

                {/* register your input into the hook by invoking the "register" function */}
                <label for="healthName">NAME</label>
                <input type = "text" name="healthName" id = "healthName" placeholder = "Name" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.healthName,

                })}
                />

                {/* errors will return when field validation fails  */}

                <div className = "invalid-feedback text-danger">
                {errors.healthName && errors.healthName.type === "pattern" && <span>Type should only have letters</span>}
                </div>
                </div>

                {/* Value */}

                <div className = "col-md-4 mb-3">

                <label for="healthValue">VALUE</label>
                <input type = "text" name="healthValue" id = "healthValue" placeholder = "Type" ref={register} 
                className = {classnames("form-control form-control-md", {

                "is-invalid": errors.healthValue,

                })}
                />

                <div className = "invalid-feedback text-danger">
                </div>
                </div>

                 {/* Since */}

                 <div className = "col-md-4 mb-3">

                 <label for="allergyCause">SINCE</label>
                 <input type = "date" name="healthSinceDate" id = "healthSinceDate" ref={register} 
                 className = {classnames("form-control form-control-md", {

                 "is-invalid": errors.healthSinceDate,

                 })}
                 />

                 <div className = "invalid-feedback text-danger">
                 </div>
                 </div>

                  {/* Relevant Documents */}

                  <div className = "col-md-4">

                  <label for="relevantDocuments">RELEVANT DOCUMENTS</label>

                  </div>

                  {/* Upload */}

                  <div className = "col-md-4 mb-3">

                  <label> 
                  <div className = "btn text-light" style = {{backgroundColor: " #0060bf", width: "200px"}}>
                  UPLOAD
                  </div>
                  <input name = "healthDoc" type="file" onChange = {onHealthFileChange} ref = {register} style={{display: "none"}}/>
                  </label>  

                  <div className = "file__preview">

                    {healthDoc1NameFinal} 

                  </div>
                  </div>

        </div>
        </div>

        <br />

        {/* Habits & Addictions */}

        <div className = "col">

            <div className = "form-row">

            {/* Drinking Habit */}

            <div className = "col-md-6 mb-3" style = {{marginTop: "32px"}}>

            <label for="drinkingHabit">DRINKING HABIT</label>

            <select id="drinkingHabit" name = "drinkingHabit" ref={register({ required: true })}

            className = {classnames("form-control form-control-md", {

            "is-invalid": errors.drinkingHabit,

            })}>

            <option value = "">Please select one</option>
            <option value = "No">No</option>
            <option value = "Occasional">Occasional</option>
            <option value = "Frequent">Frequent</option>
            <option value = "Regularly">Regularly</option>

            </select>

            <div className = "invalid-feedback text-danger">
            {errors.drinkingHabit && errors.drinkingHabit.type === "required" && <span>This field is required</span>}
            </div>

            </div>

            {/* Smoking Habit */}

            <div className = "col-md-6 mb-3" style = {{marginTop: "32px"}}>

            <label for="smokingHabit">SMOKING HABIT</label>

            <select id="smokingHabit" name = "smokingHabit" ref={register({ required: true })}

            className = {classnames("form-control form-control-md", {

            "is-invalid": errors.smokingHabit,

            })}>

            <option value = "">Please select one</option>
            <option value = "No">No</option>
            <option value = "Occasional">Occasional</option>
            <option value = "Frequent">Frequent</option>
            <option value = "Regularly">Regularly</option>

            </select>

            <div className = "invalid-feedback text-danger">
            {errors.smokingHabit && errors.smokingHabit.type === "required" && <span>This field is required</span>}
            </div>

            </div>
            </div>

            <div className = "form-row">

            {/* Other Addictions */}

            <div className = "col-md-6 mb-3">

            {/* register your input into the hook by invoking the "register" function */}
            <label for="otherAddictions">OTHER ADDICTIONS</label>
            <input type = "text" name="otherAddictions" id = "otherAddictions" placeholder = "Other Addictions" ref={register({pattern: /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i })} 
            className = {classnames("form-control form-control-md", {

            "is-invalid": errors.otherAddictions,

            })}
            />

            {/* errors will return when field validation fails  */}

            <div className = "invalid-feedback text-danger">
            {errors.otherAddictions && errors.otherAddictions.type === "pattern" && <span>Type should only have letters</span>}
            </div>
            </div>
            </div>

            <div className = "form-row">

            {/* Form Submit */}

            <div className = "col-md-6 mb-3 ml-auto">

            <input className = "btn btn-block text-light" type="submit" value = "SUBMIT FOR VERIFICATION" />
            
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

export default PatientSignUpForm2;
