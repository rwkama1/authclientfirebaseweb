const { AuthClient } = require("../data/AuthClient");
const { DClient } = require("../data/DClient");
const { Validation_Client } = require("./Validate_Client");

class Client_maintenance
{
    static getInstance() {
        if (!Client_maintenance.instancia) {
            Client_maintenance.instancia = new Client_maintenance();
        }

        return Client_maintenance.instancia;
    }
    addclient=async(dtclient)=>
    { 
     Validation_Client.getInstance().validateEmailPassword(dtclient.email,dtclient.password);
    await Validation_Client.getInstance().validateSearchAddClient(dtclient.email);
    const addclient=await DClient.getInstance().addClient(dtclient);
    if(addclient===true)
    {
        const addauthcleint=await AuthClient.getInstance().createClientAuth(dtclient);
        if(addauthcleint)
        {
            const emailsended=await AuthClient.getInstance().sendEmailVerification();
            if(emailsended)
            {
                const useradded=await DClient.getInstance().getClient(dtclient.email);
                return useradded 
            }
        }    
    }
  
    }
    updateClient=async(dtclient)=>
    { 
     Validation_Client.getInstance().validateEmailPassword(dtclient.email,dtclient.password);
     await Validation_Client.getInstance().validateSearchModifyClient(dtclient.email);
     const upclientauth=await AuthClient.getInstance().updatePassword(dtclient.password);
     if(upclientauth===true)
     {
        const upclient=await DClient.getInstance().updateClient(dtclient);
        if(upclient===true)
        {
         return true    
        }
     }   
    }
    deleteClient=async(dtclient)=>
    { 
     Validation_Client.getInstance().validateEmail(dtclient.email);
     await Validation_Client.getInstance().validateSearchModifyClient(dtclient.email);
     const deleteauth=await AuthClient.getInstance().deleteClientAuth();
     if(deleteauth===true)
     {
        const delclient=await DClient.getInstance().deleteClient(dtclient);
        if(delclient===true)
        {
         return true    
        }
     }   
    }
    signInWithEmailAndPassword=async(email,password)=>
    {
        Validation_Client.getInstance().validateEmailPassword(email,password);
        await Validation_Client.getInstance().validateSearchModifyClient(email);
        const searchclient=await DClient.getInstance().getClient(email);
        const signin=await AuthClient.getInstance().signInWithEmailAndPassword(email,password);
        if(signin)
        {
            return searchclient;
        }

    }
    signOut=async()=>
    {
        const signOut=await AuthClient.getInstance().signOut();
        return signOut
    }
    client_logged_in=async()=>
    {
        const clientlogged=await AuthClient.getInstance().client_logged_in();
        return clientlogged
    }
    sendPasswordResetEmail=async(email)=>
    {
        const clientlogged=await AuthClient.getInstance().sendPasswordResetEmail(email);
        return clientlogged
    }
    
   
}
module.exports = {Client_maintenance};