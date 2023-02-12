import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import array_heros from "../assets/persons.json";
import { Heros } from "../micro_comp/game";
import { Fighting, Timer } from "./cuadrilater";


export function Playing(){
    const [inFight, setInFight] = useState(false);
    const [enemy, setEnemy] = useState(random_selec());
    const hero_id = useLocation().state;

    useEffect(() => {
        setTimeout(() => {
            setInFight(true);
        },3000)
    },[])

    const myHero = select(hero_id);

    return <>
        <div className="DFL FLCOL MXW620 MNW280 P5-20 W1X GAP80">
            {!inFight? (
                <>
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
                    <Timer />
                </>
            ): <Fighting myhero={myHero} enemy={enemy}/>}
        </div>
        </>
}

function random_selec() {
  const random = Math.floor(Math.random() * array_heros.length);
  const random_hero = array_heros[random];
  return new Heros(
    random_hero.name,
    random_hero.fuerza,
    random_hero.armadura,
    random_hero.velocidad,
    random_hero.inteligencia,
    random_hero.aspecto,
    random_hero.retrato,
    random_hero.avatar,
    random_hero.imagenRender,
    random_hero.animations,
  );
}

function select(id) {
  let selc_hero;
  array_heros.map((hero) => {
    if (hero.id === id) {
      selc_hero = new Heros(
        hero.name,
        hero.fuerza,
        hero.armadura,
        hero.velocidad,
        hero.inteligencia,
        hero.aspecto,
        hero.retrato,
        hero.avatar,
        hero.imagenRender,
        hero.animations
      );
    }
  });
  return selc_hero;
}
