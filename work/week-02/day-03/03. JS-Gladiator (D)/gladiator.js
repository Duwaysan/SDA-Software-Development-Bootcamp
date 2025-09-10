const prompt = require('prompt-sync')

class Gladiator{
    static weapons = ['Spear','Club','Trident']
    constructor (name,weapon){
        // if (!Gladiator.weapons.includes(weapon)) throw new Error(`Invalid weapon: ${weapon}`)
        this.name = name;
        this.weapon = weapon
            
    }
}

class Arena{
    constructor(name){
        this.name = name[0].toUpperCase() + name.slice(1);
        this.gladiators = []
    }
    removeGladiator(Gladiator){
        const index = this.gladiators.indexOf(Gladiator)
        this.gladiators.pop(index)
    }

    addGladiator(Gladiator){
        if (this.gladiators.length<2)
            this.gladiators.push(Gladiator)
        else 
            console.log('Maximum number of gladiators reached')
    }

    fight(){
        if (this.gladiators.length === 2){ //make sure there are 2 gladiators on the field
        let glad1 = this.gladiators[0]
        let glad2 = this.gladiators[1]
        let glad1Weap =  glad1.weapon
        let glad2Weap =  glad2.weapon
        const weapMap = {Trident:"Spear",
                        Spear:"Club",
                        Club:"Trident"
                }
        if (glad1.name === 'Maximus' || glad2.name === 'Maximus'){
            console.log('CROWD IS ENTERTAINED')
            console.log(`Gladiator Maximus Won!!`)
            return}
        

        if (glad1Weap === glad2Weap){
            thumbs = prompt(`Thumbs "up" for the gladiators ${glad1.name} and ${glad2.name} to COMEBACK!!!`)
            if (!thumbs === "up")
                this.gladiators.splice(0,2)
            console.log(`Both Gladiators were Eleminated`)
        }
        else if(weapMap[glad1Weap] === glad2Weap ){
            console.log(`Gladiator ${glad1.name} Won!!`)
            thumbs = prompt(`Thumbs "up" for the gladiator ${glad2.name} to COMEBACK!!!`)
            if (!thumbs === "up")
                this.gladiators.splice(1,1)
        }else{
            console.log(`Gladiator ${glad2.name} Won!!`)
            thumbs = prompt(`Thumbs "up" for the gladiator ${glad1.name} to COMEBACK!!!`)
            if (!thumbs === "up")
            this.gladiators.splice(0,1)
        }
    
            
    
        }
    }

}
// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"


const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis

// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []
new Gladiator("Jesse", "Taco")
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const andronicus = new Gladiator("Andronicus", "Sword");

const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
colosseum.fight();
// console.log(colosseum.gladiators); // => [max]
// console.log(colosseum.gladiators.length); // => 2