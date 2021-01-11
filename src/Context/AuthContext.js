import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase.js'

import firebase from '../firebase.js'


const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}



export  function AuthProvider({children}){

const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(true)


function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
}


function login(email, password){
    return auth.signInWithEmailAndPassword(email, password)
}

function updateUserData(user, name){

console.log(user)

    console.log('currentUser dans updateUser', user)

      user.updateProfile({
            displayName: "Jane Q. User"
            })
            .then(function() {
              // Update successful.
              //return currentUser.displayName
              console.log('Username updated')

            })
            .catch(function(error) {
              // An error happened.
              console.log('error update Username: ', error)
            });

}

function logout(){
  return auth.signOut()
}

function resetPassword(email){
  return auth.sendPasswordResetEmail(email)
}

function updateEmail(email){
  return currentUser.updateEmail(email)
}

function updatePassword(password){
  return currentUser.updatePassword(password)
}

function changeStatus(){
  return auth.onAuthStateChanged(user => {return user})
}

function updateUsername(name){
  //console.log('Firebase function', name)

  currentUser.updateProfile({
  displayName: name
  //photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = currentUser.displayName;
  console.log('The username has been properly updated!')
  // "https://example.com/jane-q-user/profile.jpg"
  //var photoURL = user.photoURL;
}, function(error) {
  // An error happened.
  console.log('error in the username update - ', error )
});


}

function updateCountry(id){

  currentUser.updateProfile({
  //phoneNumber: id
  photoURL: id
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  //var newCountryId = currentUser.phoneNumber;
  console.log('The country has been properly updated! ', id)
  // "https://example.com/jane-q-user/profile.jpg"
  //var photoURL = user.photoURL;
}, function(error) {
  // An error happened.
  console.log('error in the country update - ')
});





}



useEffect(()=>{

  const unsubscribe = auth.onAuthStateChanged(user =>{

    setCurrentUser(user)
    setLoading(false)
  })

return unsubscribe

}, [])


const value = {
  currentUser,
  signup,
  login,
  logout,
  resetPassword,
  updateEmail,
  updatePassword,
  updateUserData,
  changeStatus,
  updateUsername,
  updateCountry
}

  return (


<AuthContext.Provider value={value}>
{!loading && children}
</AuthContext.Provider>

  )
}
