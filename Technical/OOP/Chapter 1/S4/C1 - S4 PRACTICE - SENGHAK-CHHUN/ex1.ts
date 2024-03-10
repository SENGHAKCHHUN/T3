
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type
	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions
*/

type person = {name : string, nationality : string, salary : string};

function getName(person: any) {
  return person.name;
}

function sumSalaries(person1 : any, person2: any) {
  return person1.salary + person2.salary;
}

function isFrench(person: any) {
  return person.nationality == "French";
}

let person1 : person = {name: "him", nationality: "khmer", salary: "1000"}
let person2 : person = {name: "yon", nationality: "cambodia", salary: "1000"}

console.log(getName(person1));
console.log(getName(person2));
console.log(sumSalaries(person1, person2));
console.log(isFrench(person1));
console.log(isFrench(person2));
