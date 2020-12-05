// General Imports of Packages Stuff
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Signup Form Imports
import PatientSignUpForm1 from './components/Forms/SignupForms/PatientSignUpForms/PatientSignUpForm1';
import PatientSignUpForm2 from './components/Forms/SignupForms/PatientSignUpForms/PatientSignUpForm2';

import Content from './components/Dashboards/DoctorDashboard/DashboardLayout/Content';
import Testing from './components/Forms/PatientDataForms/PersonalDetailsForm/Testing';

function App() {
  return (

    <Provider store = { store }>

    <Router>

    <PersistGate persistor = { persistor }>

    <div className="App">

    <Route exact path = "/" component = {Testing} />

    <Route exact path = "/SignUp/PatientSignUpForm01" component = {PatientSignUpForm1} />

    <Route exact path = "/SignUp/PatientSignUpForm02" component = {PatientSignUpForm2} />

    <Route exact path = "/DoctorDashboard" component = {Content} />
   
    </div>

    </PersistGate>

    </Router>

    </Provider>

  );
}

export default App;
