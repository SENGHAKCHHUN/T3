export class country {
    name: string;
    population: number;
    capital : string;
    currency : string;
    constructor (name: string, population: number, capital: string, currency: string){
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
    }
    getInformation(): string{
        return "Welcome to " + this.name + ", " + this.population + " millions people, captial " + this.capital + " and currency" + this.currency ;  
    }
};


