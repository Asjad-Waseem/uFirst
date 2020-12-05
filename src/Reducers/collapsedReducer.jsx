import { COLLAPSED_STATE } from '../Actions/Types';

  const initialState = {

    collapsed: true,
   
  };

  export default function(state = initialState, action){

    switch(action.type) {

        case COLLAPSED_STATE:

        return{

            ...state,
            collapsed: !state.collapsed,

        };

        default:

        return state;
        
    }

}