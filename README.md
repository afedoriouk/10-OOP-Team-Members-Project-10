https://user-images.githubusercontent.com/98120553/176254598-23b98147-15be-4215-a985-3f17832c3729.mp4


https://user-images.githubusercontent.com/98120553/176556808-6a5bb4c5-006d-4452-936d-06efb9b26b1d.mp4

# 10 Object-Oriented Programming: Team Profile Generator


This Object-Oriented Programming Team Profile Generator project is built using Node.js command-line application. Node is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser, which was designed to build scalable network applications.

In this object-oriented programming: team profile generator users' input is submitted to the database and the information about the employees is published and displayed on the HTML pages that are built dynamically.

In order to run the application testing is required to check if there are any issues with the data.
The following video clip demonstrates the functionality of the application and all of the tests passing.

## Demonstration

The following image shows the generated HTML’s appearance and functionality. 
<img width="930" alt="10-OOP-Team-Members Project-Screenshot-1" src="https://user-images.githubusercontent.com/98120553/176264268-75b024f6-9e08-4ed6-a7e1-139372e214fd.png">

## User Story
```md
A manager of the team is looking to generate a webpage that displays the basic information about the employees. </br>
Database informations allows quick access to their emails and GitHub profiles.
```

## Implementation

```md
Command-line application that accepts user input
Prompted for my team members and their information
HTML file is generated
Prompted to enter the team manager’s name, employee ID, email address, and office number
Enter the team manager’s name, employee ID, email address, and office number
```

## Thechnologies

The application is using
[Jest](https://www.npmjs.com/package/jest) to run the unit tests and
[Inquirer](https://www.npmjs.com/package/inquirer) to collect input from the user. The application will be invoked by using the following command:

Directory structure:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like this:

```md
.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/
├── lib/
├── index.js
└── package.json
```

The application has these classes: `Employee`, `Manager`, `Engineer`, and `Intern`.

The first class is an `Employee` parent class with the following properties and methods:

* `name`
* `id`
* `email`
* `getName()`
* `getId()`
* `getEmail()`
* `getRole()`
