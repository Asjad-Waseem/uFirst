// import isEmpty from '../Validation/is-empty';
import { SUBMIT_PATIENT_PERSONAL_DETAILS } from '../Actions/Types';

  const initialState = {

    form1Data: {},
   
  };

  export default function(state = initialState, action){

    switch(action.type) {

        case SUBMIT_PATIENT_PERSONAL_DETAILS:

        return{

            ...state,
            form1Data: action.payload

        };

        default:

        return state;
        
    }


}