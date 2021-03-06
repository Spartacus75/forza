//import React from 'react'
//import './App.css';
import MyAppBar from'./Components/MyAppBar'
//import Presentation from './Components/Presentation'
//import Pricing from './Components/Pricing'
//import Services from './Components/Services'
//import SignUp from './Components/SignUp'
//import SignIn from './Components/SignIn'
//import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import Main from './Components/Main'
import Dashboard from './Components/Dashboard'
import ForgotPassword from './Components/ForgotPassword'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
//import myApp from './firebase.js'
import {AuthProvider} from "./Context/AuthContext"
//import PrivateRoute from './Assets/PrivateRoute'
import firebase from './firebase.js'
import PrivateRoute from './Assets/PrivateRoute'

function App() {

console.log('ici')
console.log('firebase', firebase)


  return (
<>

  <AuthProvider>

      <Router basename="/projectreview">

        <MyAppBar/>

        <Switch>
              <Route exact path="/" component={Login}/>
              <PrivateRoute path="/main" component={Main}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <Route path="/forgotpassword" component={ForgotPassword}/>
{/*              <Route path="/services" component={Services}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/forgotpassword" component={ForgotPassword}/>
              <PrivateRoute path="/myprofile" component={MyProfile}/>*/}
        </Switch>

      </Router>

  </AuthProvider>
</>
  );
}

export default App
