import { useLocation } from "react-router-dom";
import { useState } from "react";

import array_heros from '../assets/persons.json';
import { Heros } from "../micro_comp/game";




export function Playing(){
    const [inFight, setInFight] = useState(false);
    const [hero_attack, setHero_attack] = useState(false);
    const [enemy_attact, setEnemy_attack] = useState(false);

    const hero_id = useLocation().state;
    
    const myHero = select(hero_id);
    const enemy = random_selec();

    



    return <>
        <div className="DFL FLCOL MXW620 MNW280 P5-20 W1X GAP80">
            <div className="DFL JSTCC colorw ">
                <h1 className="vs RD50X">VS</h1>
            </div>
            <div className="DFL JSTCSB FLRW MXW620">
                <div className="select_hero_img">
                    <img className="slct" src={`/${myHero.image}`} />
                </div>
                <div className="select_hero_img">
                    <img className="slct" src={`/${enemy.image}`}/>
                </div>
            </div>
        </div>
    </>
}


function random_selec() {
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

function select(id) {
    let selc_hero;
    array_heros.map(hero => {
        if(hero.id === id) {
            selc_hero = new Heros(
                hero.name,
                hero.fuerza,
                hero.armadura,
                hero.velocidad,
                hero.inteligencia,
                hero.aspecto,
                hero.retrato
            )
        }
    });
    return selc_hero
}