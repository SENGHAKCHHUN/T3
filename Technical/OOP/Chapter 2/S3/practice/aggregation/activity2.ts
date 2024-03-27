class House {
    doors: Door[] = [];
    rooms: Room[] = [];
    setRoom(room:Room){
        this.rooms.push(room);
    }
    setDoor(door:Door){
        this.doors.push(door);
    }
}

class Door {
    Doortype : string;
    color : string;
    constructor (DoorType: string, color: string){
        this.Doortype = DoorType;
        this.color = color;
    }
}

class Room {
    owner : string;
    doors: Door[] = [];
    constructor (owner: string){
        this.owner = owner;
    }
    setDoor(door: Door){
        this.doors.push(door);
    }
}

let door1 = new Door("Wood", "orange");
let door2 = new Door("Wood", "orange");
let door3 = new Door("Wood", "orange");
let room1 = new Room("janali");
let room2 = new Room("namaleak");
let LeakHoust = new House();


room1.setDoor(door1);
room2.setDoor(door2);
LeakHoust.setDoor(door3);
LeakHoust.setRoom(room1);
LeakHoust.setRoom(room2);

console.log(LeakHoust)