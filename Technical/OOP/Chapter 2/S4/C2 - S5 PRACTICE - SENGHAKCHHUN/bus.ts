// Class for trip. in trip have alot of customer 
class Trip{
    busName: String;
    Depathure: Address[] = [];
    Arrive: Address[] = [];
    Customers: Customer[] = [];
    DateTimeDepathure : Datetime[] = [];
    DateTimeArrive : Datetime[] = [];
    constructor(busName: string){
        this.busName = busName;
    }
    setCustomer(customer: Customer){
        this.Customers.push(customer);
    }
    setDepathure(add : Address){
        this.Depathure.push(add);
    }
    setArrive(add: Address){
        this.Arrive.push(add);
    }
    setDepathureDatetime(date : Datetime){
        this.DateTimeDepathure.push(date);
    }
    setArriveDatetime(date : Datetime){
        this.DateTimeArrive.push(date);
    }
}

class Customer{
    firstName : string;
    lastName : string;
    Address : Address[] = [];
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setAddress(add: Address){
        this.Address.push(add)
    }
}

class Address{
    city: string;
    street: string;
    constructor(city: string, street: string){
        this.city = city;
        this.street = street
    }
}

class Datetime{
    date: string;
    time: string;
    constructor(date : string, time: string){
        this.date = date;
        this.time = time;
    }
}

let user1 = new Customer("Ronan", "Ogor");
let user2 = new Customer("Him", "Hey");
let user3 = new Customer("Sovanda", "chib");

let address1 = new Address("Paris" , "France");
let address2 = new Address("Phnom Penh", "Cambodia")
let address3 = new Address("Sieam Reap", "Cambodia");
let address4 = new Address("Kampot", "Cambodia");

let date1 = new Datetime("20-03-2024", "06:00p.m.");
let date2 = new Datetime("20-03-2024", "08:00p.m.");

user1.setAddress(address1);
user3.setAddress(address2);

let Trip1= new Trip("KAKA Bus");
Trip1.setCustomer(user1);
Trip1.setCustomer(user3);
Trip1.setDepathure(address2);
Trip1.setArrive(address4);
Trip1.setDepathureDatetime(date1);
Trip1.setArriveDatetime(date2);


let Trip2 = new Trip("LYHOR Express");
Trip2.setCustomer(user1);
Trip2.setCustomer(user2);
Trip2.setCustomer(user3);
Trip2.setDepathure(address2);
Trip2.setArrive(address4);
Trip2.setDepathureDatetime(date1);
Trip2.setArriveDatetime(date2);


console.log(Trip1)
console.log(Trip2)
