const conection= require('./conection').Conection;
const { Client } = require("../entity/Client");
class AuthClient  {
  static instancia;
  constructor() { }
  static getInstance() {
        if (!AuthClient.instancia) {
            AuthClient.instancia = new AuthClient();
        }

        return AuthClient.instancia;
    }
    createClientAuth=async(dtclient)=>
    {
        try {
        const firebase=conection.dbfirebase();
        const authclient= await firebase.auth().createUserWithEmailAndPassword(dtclient.email,dtclient.password);
        return true
    }
    catch (error) {

      throw new Error("Database Error : "+error.message);
   }
  }
   sendEmailVerification=async()=>
   {
       try {
       const firebase=conection.dbfirebase();
       const sendemail= await firebase.auth().currentUser.sendEmailVerification();
       return true
   }
   catch (error) {

     throw new Error("Database Error : "+error.message);
  }
 }
   sendPasswordResetEmail=async(email)=>
    {
        try {
            const firebase=conection.dbfirebase();
            const send= await firebase.auth().sendPasswordResetEmail(email);
            return true
        }
        catch (error) {
            throw new Error("Database Error : "+error.message);
        }
    }
   updatePassword=async(password)=>
    {
        try {
        const firebase=conection.dbfirebase();
        const client = await firebase.auth().currentUser;
        if(client!=null)
        {
            let update=await client.updatePassword(password);
            return true
        }      
    }
    catch (error) {
      throw new Error("Database Error : "+error.message);
     }
  }
  deleteClientAuth=async()=>
  {
      try {
      const firebase=conection.dbfirebase();
      const client = await firebase.auth().currentUser;
      if(client!=null)
      {
          let deletee=await client.delete();
          return true
      }      
  }
  catch (error) {
    throw new Error("Database Error : "+error.message);
   }
}
 //**************************************************** */
   signInWithEmailAndPassword=async(email,password)=>
 {
     try {
     const firebase=conection.dbfirebase();
     const sign= await firebase.auth().signInWithEmailAndPassword(email,password);
     return true
 }
 catch (error) {

   throw new Error("Database Error : "+error.message);
}
    }
    client_logged_in=async()=>
    {
        try {
        const firebase=conection.dbfirebase();
        const client = await firebase.auth().currentUser;
        return client
    }
    catch (error) {

    throw new Error("Database Error : "+error.message);
    }
    }
  
    signOut=async()=>
    {
    try {
            const firebase=conection.dbfirebase();
            const signout= await firebase.auth().signOut();
            return true
        }
        catch (error) {

        throw new Error("Database Error : "+error.message);
        }
    }
}
module.exports = {AuthClient};