// class Player{
// constructor(name,type,demage){
//     this.name=name,
//     this.type=type,
//     this.demage=demage
// }
//  intro() {
//     return `MY name is ${this.name}, i am a ${this.type}, and ${this.name} health is ${this.demage}.`
// }
// }


// class Sniper extends Player{
//     constructor(name,type,demage,power){
//         super(name,type,demage)
//         this.power=power
        
//     }

//     powers(){
//         return `${this.name} has ${this.power} power`
//     }
    
// }

// class Attack {
//     constructor(player){
//         this.player=player
               
//     }

//     shoot(){
//         this.player.demage--
//         // console.log(this.player);
//         return `${this.player.name} was shot! -1 health. Remaining health: ${this.player.demage}`;
//     }
    
// }


// const p1= new Sniper("Jack")
// const p2= new Sniper("Ritik","Gay",69,"Kisses")
// p1.power="super speed"
// p1.demage=100
// p1.type="super hero"
// const attack= new Attack(p1)
// const attack2= new Attack(p2)



// console.log(p1.intro());
// console.log(p2.intro());
// //console.log(p1.powers());
// console.log(attack.shoot());
// console.log(attack2.shoot());
// console.log(p2.demage);
// console.log(attack.shoot());
// console.log(p1.demage);
// console.log(p2.intro());





class Player{
    constructor(name,health,Power){
        this.name=name,
        this.health=health,
        this.Power=Power
    }
    intro(){
        return `I am ${this.name}, My Powers are ${this.Power}`;
    }
}

class Attack{
    constructor(player){
        this.player=player
    }
    kick(){
        this.player.health--
        return `heath ${this.player.health}`
    }
    shoot(){
        this.player.health= this.player.health - 10
        return `health ${this.player.health}`
    }
}


const p1=new Player("jack",100,"cuteness")

const p2=new Player("venom",100,"sniff")
const hit= new Attack(p2)


console.log(p2.intro());
console.log(hit.kick());
console.log(hit.shoot());
