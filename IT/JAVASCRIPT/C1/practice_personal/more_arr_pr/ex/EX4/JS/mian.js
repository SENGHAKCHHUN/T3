let students = ['Romdul', 'RomChong', 'Kolap'];
let countries = ['Canada', 'Cambodia', 'Thai'];
let majors = ['SNA', 'WEB', 'Database'];
let newarr = [];
for (let i = 0; i < students.length; i++) {
    let obj = {};
    obj.student = students[i]
    obj.countries = countries[i]
    obj.majors = majors[i]
    newarr.push(obj)
}
console.log(newarr)