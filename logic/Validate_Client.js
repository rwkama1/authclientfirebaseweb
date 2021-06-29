const { DClient } = require("../data/DClient");


  class Validation_Client{
    
   static getInstance() {
        if (!Validation_Client.instancia) {
            Validation_Client.instancia = new Validation_Client();
        }

        return Validation_Client.instancia;
    }
    validateEmail=(email)=>
    {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.match(mailformat)))
        {
            throw new Error("You have entered an wrong email address!");
        }
    }
    validatePassword=(password)=>
    {
        let passw= /^[A-Za-z]\w{7,14}$/;
        if (!(password.match(passw)))
        {
            throw new Error("The password must be : 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter");
        }
    }
    validateEmailPassword=(email,password)=>
    {
        this.validateEmail(email);
        this.validatePassword(password);
    }
    //*************************************************************************** */
    validateSearchModifyClient=async(email)=>
    {
        let searchclient=await DClient.getInstance().getClient(email);
        if (searchclient === null) {
            throw new Error("Logic Error: That Client does not exists in the system");
        }
    }
    validateSearchAddClient=async(email)=>
    {
        let searchclient=await DClient.getInstance().getClient(email);
        if (searchclient != null) {
            throw new Error("Logic Error: That Client already exists in the system");
        }
    }
//*************************************************************************** */
}
module.exports = {Validation_Client};