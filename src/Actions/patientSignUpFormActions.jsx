// import axios from 'axios';
import { SUBMIT_PATIENT_PERSONAL_DETAILS } from './Types';

// Patient Sign Up Form Phase-1 - Personal Details Form

export const submitPersonalDetails = (patientData, history) => dispatch => {

   alert(JSON.stringify(patientData));

   console.log(patientData);

   history.push('/SignUp/PatientSignUpForm02');

   dispatch ({

      type: SUBMIT_PATIENT_PERSONAL_DETAILS,
      payload: patientData

   })



//    function LOG_IN (value) {

//       // console.log(value);

//        return{

//            type: "LOG_IN",
//            payload: value

//        }

//    };

};