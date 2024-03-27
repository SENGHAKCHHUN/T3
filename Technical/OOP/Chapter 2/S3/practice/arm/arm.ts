class Man {
    leftArm: Arm = new Arm(true);
    rightArm: Arm = new Arm(false);
}
class Arm{
    isLeft: boolean;
    constructor(isleft: boolean){
        this.isLeft = isleft;
    }
}
let nan = new Man()
console.log(nan)