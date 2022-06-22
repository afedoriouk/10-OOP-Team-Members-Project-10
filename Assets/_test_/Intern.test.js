//Intern constructor
const Intern = require('../lib/Intern');

//Intern object
test('creates an Intern object',() => {
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CTU');
    expect(intern.school).toEqual(exprect.any(String));

});
//getSchool method
test('gets employee school', ()=>{
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CPTU');
    expect(intern.getSchool()).toEqual(expect.schoolContaining(intern.school.toString()));

})
//getRole method
test('gets role of employee',() =>{
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CPTU');
    expect(intern.getRole()).toEqual("Intern");
});