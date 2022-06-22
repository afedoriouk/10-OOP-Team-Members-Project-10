// const generateTeam = (team) => {
//     console.log(team);
//     //need ampty array for HTML elements
//     const html = [];
//     //creaste function for each employee
//     const generateManager = manager =>{

    
//         console.log(manager);
//     let managerHtml = `
// <div class="card" style="width: 18rem;">
// <div class="card-header">
// ${manager.name} <br/>
// <ul class="list-group-item">ID: ${manager.id}</li>
// <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
// <li class="list-group-item">Phone Number: ${manager.phoneNumber}</li>
// </ul>
// </div>`;
//     html.push(managerHtml);
// }
// const generateEngineer = engineer =>{

    
//     console.log(engineer);
// let engineerHtml = `
// <div class="card" style="width: 18rem;">
// <div class="card-header">
// ${engineer.name} <br/>
// <ul class="list-group-item">ID: ${engineer.id}</li>
// <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
// <li class="list-group-item">Phone Number: ${engineer.phoneNumber}</li>
// </ul>
// </div>`;
// html.push(engineerHtml);
// }

// const generateIntern = intern =>{

    
//     console.log(intern);
// let internHtml = `
// <div class="card" style="width: 18rem;">
// <div class="card-header">
// ${intern.name} <br/>
// <ul class="list-group-item">ID: ${intern.id}</li>
// <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
// <li class="list-group-item">School Name: ${intern.schoolName}</li>
// </ul>
// </div>`;
// html.push(internHtml);
// }

// //all employees
// for (let i =0; i < team.lenght; i++){
//     if (team[i].getRole()==="Manager"){
//         generateManager(team[i]);
//     }
//     if (team[i]).getRole()==="Engineer"{
//         generateEngineer(team[i]);
//     }
//     if(team[i].getRole()==="Intern"){
//         generateIntern(team[i]);
//     }
//     }
//     //combine HTML blocks
//     return html.join('');
// }
//     //export function
//     module.exports = team=>{
//         return`
//         <!DOCTYPE html>
//         `
//     }

