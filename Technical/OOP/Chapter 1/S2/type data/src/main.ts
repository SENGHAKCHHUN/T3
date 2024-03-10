type Teacher = {
    name: string, 
    age: string,
    subjectToTeacher: string
}

type Student = {
    name: string,
    class : string
}


let personOne : Teacher = {name: 'rady', age: '15', subjectToTeacher: 'node'};
let personTwo : Student = {name: 'rady', class: 'WEB A'};
console.log(personOne)