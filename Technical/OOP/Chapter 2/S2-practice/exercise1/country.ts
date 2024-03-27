import { country } from "./main";
let area = new country("France", 70 , "Paris", "Euro");
console.log(area.getInformation())
console.log(new country("Cambodia", 17 , "Phnom Penh", "Riel").getInformation());
console.log(new country("France", 80 , "London", "Pound").getInformation());

