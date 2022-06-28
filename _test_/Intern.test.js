//Intern constructor
const Intern = require('../lib/Intern');

//Intern object
test('creates an Intern object',() => {
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CPTU');
    expect(intern.school).toEqual('CPTU');

});
//getSchool method
test('gets employee school', ()=>{
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CPTU');
    expect(intern.getSchool()).toEqual('CPTU');

})
//getRole method
test('gets role of employee',() =>{
    const intern = new Intern('Alex', 23456, 'alex.name@gmail.com', 'CPTU');
    expect(intern.getRole()).toEqual("Intern");
});