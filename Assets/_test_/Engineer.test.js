//engineer constructor
const Engineer = require('../lib/Engineer');

//engineer object
test ('creates an Engineer object',() =>{
    const engineer = new Engineer('Sam', 654321, 'sam.name@gmail.com', 'samross10' );
    expect (engineer.github).toEqual(expect.any(String));

})

//getGithub
test('gets engineer github', () =>{
    const engineer = new Engineer ('Sam', 654321, 'sam.name@gmail.com', 'samross10');
    expect(engineer.github).toEqual(expect.any(String));

});

//getRole
test('gets role of employee', ()=>{
    const engineer = new Engineer('Sam', 654321, 'sam.name@gmail.com', 'samross10');
    expect(engineer.getRole()).toEqual("Engineer");

});