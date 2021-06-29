const firebase = require("firebase/app");
// Required for side-effects
require("firebase/auth");
require("firebase/firestore");

class Conection
{
    static dbfirebase=()=>
    {
        try{
            const firebaseConfig = {
                apiKey: "AIzaSyChssq42N3CP-UBvJPuYVStYAmYnvNR5YM",
                authDomain: "auth-user-c0abd.firebaseapp.com",
                projectId: "auth-user-c0abd",
                storageBucket: "auth-user-c0abd.appspot.com",
                messagingSenderId: "189240429482",
                appId: "1:189240429482:web:bb5215047baf94fc85b9d3"
              };
              // Initialize Firebase
              if(!firebase.apps.length)
              {
              firebase.initializeApp(firebaseConfig);   
              }
              else
              {
                  firebase.app();
              }
        return firebase
        }
        catch(error)
        {
         throw new Error("Conection Error: "+error.message)
        }
    }
    
}
module.exports = {Conection};