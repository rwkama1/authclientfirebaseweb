
// const { Client } = require("./entity/Client");
// const { Client_maintenance } = require("./logic/Client_maintenance");

// let client=new Client("asfas@gmail.com","asfas","qwe");
// //Add Client
// //***************************************** */
//   Client_maintenance.getInstance().addclient(client).then(data=> {
//             console.log("Client logged in");
//             console.log(data);
//      });
// //Update Client
// //************************* */
//   Client_maintenance.getInstance().signInWithEmailAndPassword(client.email,client.password).then(data1=> {
//       console.log("Client logged in");
//       console.log(data1);
//       Client_maintenance.getInstance().updateClient(client).then(data=> {
//             console.log("Client Updated");
//             console.log(data);
//      });
//     });
// //Delete Client
// //************************* */
//     Client_maintenance.getInstance().signInWithEmailAndPassword(client.email,client.password).then(data1=> {
//       console.log("Client logged in");
//       console.log(data1);
//       Client_maintenance.getInstance().deleteClient(client).then(data=> {
//             console.log("Client Deleted");
//             console.log(data);
//      });
//     });

// //********************************************** */
// Client_maintenance.getInstance().signInWithEmailAndPassword(client.email,client.password).then(data1=> {
//       console.log("Client logged in");
//       console.log(data1);
//       Client_maintenance.getInstance().client_logged_in().then(data=> {
//         console.log("Client logged: ");
//         console.log(data.email);
//       });
// });

// Client_maintenance.getInstance().sendPasswordResetEmail(client.email).then(data=> {
//   console.log(data);
//   console.log("A message was sent to your email to reset the password");
  
// });
// Client_maintenance.getInstance().signOut().then(data=> {
//   console.log(data);
//   console.log("Logged out Client");
  
// });