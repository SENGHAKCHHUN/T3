export class alumni {
    VueJS: number;
    NodeJS: number;
    OOP: string;
    constructor(VueJS: number, NodeJS: number, OOP: string ){
        this.VueJS = VueJS;
        this.NodeJS = NodeJS;
        this.OOP = OOP;
    };
    getSalary(): number {
        if (this.NodeJS < 1 && this.VueJS < 1 && this.OOP === "no"){
            return 250;
        }
        else if (this.NodeJS < 1 && this.VueJS > 1 && this.OOP == "no"){
            return 350;
        }
        else if (this.NodeJS > 1 && this.VueJS > 1 && this.OOP == "no"){
            return 450;
        }
        else if (this.NodeJS > 1 && this.VueJS > 1 && this.OOP == "yes"){
            return 700;
        }else{
            return 0;
        }
    }
}
console.log(new alumni(0.5, 0.5, 'no').getSalary())
console.log(new alumni(1, 0.5, 'no').getSalary())
console.log(new alumni(2,2, 'no').getSalary())
console.log(new alumni(2,2, 'yes').getSalary())