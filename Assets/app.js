// const inquirer = require("inquirer")

// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
// const generateSite = require('./src/generate-site.js');

// const path = require("path");

// const fs = require("fs");
// const output_dir = path.resolve(_dirname, "output");
// const outputPath = path.join(output_dir, "team.html")
// const internCard = require("./htmlEmployeeCard/internCard");
// const engineerCard = require("./htmlEmployeeCard/engineerCard");
// const internCard = require("./htmlEmployeeCard/internCard");
// const managerCard = require("./htmlEmployeeCard/managerCard");

// // const outputPath = path.resolve(__dirname, "output", "team.html");

// const teamMember = [];

// //team members
// const promptManager = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name? (Required)",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your name');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "employeeId",
//             message: "Enter your employee ID(Required)",
//             validate: employeeId => {
//                 if (employeeId) {
//                     return true;
//                 } else {
//                     console.log('Please enter employee ID');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter employee email address",
//             validate: (email) => {
//                 if (email) {
//                     return true;
//                 } else {
//                     console.log('Please enter email address');
//                     return false;
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "phoneNumber",
//             message: "Enter employee phone number",
//             validate: (phoneNumber) => {
//                 if (phoneNumber) {
//                     return true;
//                 } else {
//                     console.log('Please enter phone number');
//                     return false;
//                 }
//             }
//         }


//     ]).then(answer => {
//         console.log(answers);
//         const manager = new Manager(answer.name, answer.emloyeeId, answer.email, answer.phoneNumber);
//         teamMember.push(manager);
//         promptMenu();
//     })
// };
// const promptMenu = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'menu',
//             message: 'Please select options below:',
//             choices: ['add an engineer', 'add an intern', 'build my team']

//         }])

//         // choice between engineer or intern

//         .then(userChoice => {
//             switch (userChoice.menu) {
//                 case "Add an Engineer":
//                     promptEngineer();
//                     break;
//                 case "add an Intern":
//                     promptIntern();
//                     break;
//                 default:
//                     buildTeam()
//             }
//         })

// };
// // list for additional teammembers
// const promptEngineer = () => {
//     console.log(`
//     ==================
//     Add a New Engineer
//     ==================`);

//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the name of engineer?',
//             validate: engineerName => {

//                 if (engineerName) {
//                     return true;
//                 } else {
//                     console.log('Please enter the name');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'Enter your employee ID?',
//             validate: employeeId => {

//                 if (employeeId) {
//                     return true;
//                 } else {
//                     console.log('Please enter your employee ID');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter your email?',
//             validate: employeeId => {

//                 if (employeeId) {
//                     return true;
//                 } else {
//                     console.log('Please enter your email');
//                     return false;
//                 }
//             }
//         }

// ]).then(answers => {
//     console.log(answers);
//     const engineer = new Engineer(answers.name, answers.employeeId, answers.email,)
//     teamMembers.push(engineer);
//     promptMenu();
// })

// };

// // list for additional teammembers
// const promptIntern = () => {
//     console.log(`
//     =================
//     Add a New Intern
//     =================`);
//     return inquirer.prompt([
//         {

//             type: 'input',
//             name:'name',
//             message:'Name of New Intern (Required)',
//             validate: internName => {
//                 if(internName) {
//                     return true;
//                 }else{
//                     console.log('Please enter name of Intern');

//                 }
//                 }
            
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'Enter your employee ID?',
//             validate: employeeId => {

//                 if (employeeId) {
//                     return true;
//                 } else {
//                     console.log('Please enter your employee ID');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter your email?',
//             validate: employeeId => {

//                 if (employeeId) {
//                     return true;
//                 } else {
//                     console.log('Please enter your email');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Enter your school name',
//             validate: schoolName => {

//                 if (schoolName) {
//                     return true;
//                 } else {
//                     console.log('Please enter your school name');
//                     return false;
//                 }
//             }
//         }

// ]).then(answers => {
//     console.log(answers);
//     const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.schoolName)
//     teamMembers.push(intern);
//     promptMenu();
// })
// };

// const buildTeam = () =>{
//     console.log(`
//     ======================
//     Finished building team
//     ======================`);

// if (!fs.existsSync(output_dir)){
//     fs.mkdirSync(output_dir)
// }
//     fs.writeFileSync(outputPath, generateSite(teamMember), "utf-8");
// }

// promptManager();
