import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import collapsedReducer from './collapsedReducer';
import patientSignUpFormDetailsReducer from './patientSignUpFormDetailsReducer';

const persistConfig = {

    key: 'root',
    storage,
    // whitelist: ['auth']
    whitelist: ['patientSignUpForm']

}

const rootReducer = combineReducers ({

    collapsed: collapsedReducer,
    patientSignUpForm: patientSignUpFormDetailsReducer
   
});

export default persistReducer(persistConfig, rootReducer);

