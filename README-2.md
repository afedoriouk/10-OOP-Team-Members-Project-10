https://user-images.githubusercontent.com/98120553/176254598-23b98147-15be-4215-a985-3f17832c3729.mp4

# 10-OOP-Team-Members-Project-10

10-OOP-Team-Members-Project 10

# 10 Object-Oriented Programming: Team Profile Generator

This Object-Oriented Programming Team Profile Generator project is built with a Node.js command-line application. Users input is submitted to the database and the information about the employees is published and displayed on the HTML pages which are dynamically buid.

In order to run the application testing is required to check =if there are any issues wih the data.
The following video clip demonstrates the functionality of the application and all of the tests passing.

## User Story

```md
AS A manager

I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Implementation

```md
Command-line application that accepts user input
Prompted for my team members and their information
HTML file is generated
Prompted to enter the team manager’s name, employee ID, email address, and office number
Enter the team manager’s name, employee ID, email address, and office number
```

## Demonstration

The following image shows the generated HTML’s appearance and functionality. The styling in the image is just an example, so feel free to add your own styles:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.]

## Thechnologies

The application is using
[Jest](https://www.npmjs.com/package/jest) to run the unit tests and
[Inquirer](https://www.npmjs.com/package/inquirer) to collect input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

Directory structure:

```md
.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/
├── lib/
├── src/
├── .gitignore
├── index.js
└── package.json
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must have these classes: `Employee`, `Manager`, `Engineer`, and `Intern`. The tests for these classes (in the `_tests_` directory) **must all pass**.

The first class is an `Employee` parent class with the following properties and methods:

- `name`

- `id`

- `email`

- `getName()`

- `getId()`

- `getEmail()`

- `getRole()` // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

- `officeNumber`

- `getRole()` // Overridden to return `Manager`

In addition to `Employee`'s properties and methods, `Engineer` will also have:

- `github` // GitHub username

- `getGithub()`

- `getRole()` // Overridden to return `Engineer`

In addition to `Employee`'s properties and methods, `Intern` will also have:

- `school`

- `getSchool()`

- `getRole()` // Overridden to return `Intern`

Finally, although it’s not a requirement, you should consider adding validation to ensure that the user input provided is in the proper expected format.

## Review

You are required to submit the following for review:

- A walkthrough video demonstrating the functionality of the application and passing tests.

- A sample HTML file generated using your application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
