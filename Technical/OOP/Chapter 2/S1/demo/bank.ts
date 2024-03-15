class Person{
    name: string;
    balance: number;
    public constructor(name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }
    
}
let me = new Person("Me", 1000);
console.log(me)
let you = new Person("you", 1000);
// you.name = "Hello world";
// you.balance = 2000;
