import array_heros from './persons.json' assert {type: 'json'};

const options = document.getElementById("container");

options.addEventListener('click', e => {
    e.target.id === "start" ? show_heroes() :
        e.target.id === "help" ? help_me() :
            e.target.id === "end" ? end_game() : false
})



class Heros {
    constructor(nombre, fuerza, armadura, velocidad, inteligencia, aspecto, retrato) {
        this.name = nombre;
        this.strength = fuerza;
        this.speed = velocidad;
        this.healt = 100;
        this.intelligence = inteligencia;
        this.appearance = aspecto;
        this.image = retrato;
        this.armor = armadura;
        this.weapons = [
            { name: "Knife", damage: 1, type: "physical" },
            { name: "Basic sword", damage: 3, type: "physical" },
            { name: "Excalibur sword", damage: 4, type: "phisical" },
            { name: "Basic bow", damage: 3, type: "phisical" },
            { name: "Crossbow", damage: 2, type: "phisical" },
            { name: "Ball of fire", damage: 7, type: "magic" },
            { name: "black hole", damage: 9, type: "magic" }
        ];
    }

    damage() {
        let damage_factor = 1;
        if (this.weapons.length > 0) {
            this.weapons.map(damage => {
                switch (damage.type) {
                    case "physical":
                        /// logic da
                        damage_factor = this.speed + this.strength + this.intelligence;
                        break;
                    case "magic":
                        damage_factor = this.speed + this.strength + this.intelligence;
                        break;
                    default:
                        damage_factor = 1
                    }
                });
            }
        return damage_factor;
    }
}

const random_selec = () => {
    const random = Math.floor(Math.random() * array_heros.length)
    const random_hero = array_heros[random]
    return new Heros(
        random_hero.name,
        random_hero.fuerza,
        random_hero.armadura,
        random_hero.velocidad,
        random_hero.inteligencia,
        random_hero.aspecto,
        random_hero.retrato
    )
}

const holk = new Heros('Holk',10,10,4,2,"Strenght","");


const enemy = random_selec();


let nIntervId;
const play_game = () => {
    if(!nIntervId) {
        nIntervId = setInterval(damage_apply,1500)
    }
}

let initial = Math.floor(Math.random() * 2)
let first_damage = [enemy,holk][initial]
const damage_apply = () => {
    
    while (holk.healt > 0 && enemy.healt > 0) {
        if(first_damage === holk) {
            enemy.healt -= holk.damage();
            first_damage=enemy
            console.log(`${enemy.name} vida: ${enemy.healt}`)
        }else {
            holk.healt -= enemy.damage();
            first_damage=holk
            console.log(`${holk.name} vida: ${holk.healt}`)
        }
    }
}

play_game();
