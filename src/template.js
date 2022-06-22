const generateTeam = team => {

    //create manager HTML
    const generateManager = manager => {
        return `
    <div class="card-employee-card">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title-1">${manager.getRole()}</h3>

<div class="card-info">
    <ul class="list-group">
        <li class=list-group-item>ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    </ul>
</div>
</div>
`;
    };

    //create engineer HTML
    const generateEngineer = engineer => {
        return `
    <div class="card-employee-card">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title-1">${engineer.getRole()}</h3>

<div class="card-info">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
    </ul>
</div>
</div>
`;
    };

    //create intern HTML
    const generateIntern = intern => {
        return `
    <div class="card-employee-card">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title-1">${intern.getRole()}</h3>

<div class="card-info">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
       
    </ul>
</div>
</div>
</div>
</div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>  <h1 class="header">My Team</h1>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="container-fluid">
    <div class="row team-area col-12 d-flex">
            ${generateTeam(team)} 
            </div>
     </div>
</body>
</html>`
};