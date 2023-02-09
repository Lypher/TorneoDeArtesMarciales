import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import array_heros from '../assets/persons.json'

export function Select_hero() {
    const [hero, setHero] = useState(null)

    return <>
        <div className='wrapper820'>
            <div className='select_hero_container'>
                <div className='grid_heros'>
                    {array_heros.map(hero => (
                        <div>
                       <button onClick={()=>setHero(hero)}
                            className='box_gr_hero'>
                            <img src={hero.retrato} className="slct"/>
                        </button>
                        </div>
                    ))}
                </div>
                <div className='show_select_hero_container'>
                    <div className={`${hero? "my_hero_box":"no_select"}`}>
                        {hero && (
                            <>
                                <div className='select_hero_img'>
                                    <img src={hero.retrato} alt="" className='slct' />
                                </div>
                                <ul className='hero_detail'>
                                    <li className='detail_name TXTTRC'>{hero.name}</li>
                                    <li>{`Fuerza: ${hero.fuerza}`}</li>
                                    <li>{`Armadura: ${hero.armadura}`}</li>
                                    <li>{`Velocidad: ${hero.velocidad}`}</li>
                                    <li>{`Inteligencia: ${hero.inteligencia}`}</li>
                                </ul>
                            </>
                        )}
                        {!hero && (
                            <div>
                                <h3 className='if_not_select'>Selecciona un personaje</h3>
                            </div>
                        )}
                    </div>
                    {hero && (
                        <NavLink to={`/start/${hero.name.split(" ").join("-")}`} state={hero.id}>
                            <button className='btn_actions'>Jugar</button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    </>
} 