const var1 = require('./var1');
const controlflow = require('./controlflow');
const students = require('./students');


console.log(var1.websitename);
console.log(var1.websiteurl);
console.log(controlflow.login("virat@gmail.com", "12348"));
console.log(controlflow.tp(1000, 5));
console.log(controlflow.rc("admin"));
console.log(controlflow.addcourse("php"));
console.log(controlflow.sc("react4"));
console.log(controlflow.dc(10000, 10));
console.log(controlflow.x(5000, 7));
console.log(controlflow.m());
console.log(controlflow.z);
console.log(controlflow.render());
console.log("all students");
console.log(students.addstudent(3, "virat", "next js"));
console.log("view students");
console.log(students.viewstudents());