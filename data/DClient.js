const conection= require('./conection').Conection;
const { Client } = require("../entity/Client");
class DClient  {
  static instancia;
  constructor() { }
  static getInstance() {
        if (!DClient.instancia) {
            DClient.instancia = new DClient();
        }

        return DClient.instancia;
    }
    addClient=async(dtclient) =>{
        const db=conection.dbfirebase().firestore();
          try {
            await db.collection("Client").doc(dtclient.email).set(
                 {
                     email:dtclient.email,
                     password:dtclient.password,
                     name:dtclient.name,
                 });
                 return true
                
          }
           catch (error) {
      
              throw new Error("Database Error : "+error.message);
          }
      }
      updateClient=async (dtclient)=> {
        const db=conection.dbfirebase().firestore();
        try {
           await db.collection("Client").doc(dtclient.email).update(
           {
            password:dtclient.password,
            name:dtclient.name,
               });
         return true
        }
         catch (error) {
    
          throw new Error("Database Error : "+error.message);
        }
    }
    deleteClient=async(dtclient)=> {
      const db=conection.dbfirebase().firestore();
        try {
           await db.collection("Client").doc(dtclient.email).delete();
           return true
        }
         catch (error) {
    
          throw new Error("Database Error : "+error.message);
        }
      }
      getClient=async(email)=> {
    
        try {
             const db=conection.dbfirebase().firestore();
             let objclient=null;
             const scli= await db.collection("Client").doc(email);
             const doc =  await scli.get();
             const cli=await doc.data();
             if(cli==null)
             {
                 return null
             }
             objclient=new Client(cli.email,cli.password,cli.name);
             return objclient;
            }
           catch (error) {    
             throw new Error("Database Error : "+error.message);
           }
        }
}
module.exports = {DClient};