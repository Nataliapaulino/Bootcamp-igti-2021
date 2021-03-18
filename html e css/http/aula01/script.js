 let employess=fetch("http://localhost:3000/employees"):
 //
employeesPromise.then((resp)=>{
resp.json().then((employees)=>{
console.log(employees);

})
});
console.log("log");