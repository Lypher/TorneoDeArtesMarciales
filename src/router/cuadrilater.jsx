import { useState, useEffect } from "react"
import { Winner } from "./winner";
import { Transitions } from "../animations/transitions";
import espada from '../assets/sounds/la-cuchilla_1.mp3'
import { AudioPlayer } from "../assets/sounds/audioPlay";

export function Timer() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count <= 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <>
      <div className="modal_fix">
        <div className="DFL">
          <span className="timer">{count}</span>
        </div>
      </div>
    </>
  );
}



export function Fighting ({myhero,enemy}) {
    const [myhealt, setMyheal] = useState(myhero.healt);
    const [enemyhealt, setEnemyhealt] = useState(enemy.healt);
    const [first_attack, setFirst_attack] = useState((Math.random() <= 0.5));
    const [animate_1, setAnimate_1] = useState(false);
    const [animate_2, setAnimate_2] = useState(false);
    const [winner, setWinner] = useState(false)
    debugger


    useEffect(() => {
        if(myhealt<=0 || enemyhealt<=0){
            myhealt>0? setWinner(myhero): setWinner(enemy)
            return
        }
        const intervalId = setInterval(() => {
            if(first_attack) {
                setFirst_attack(false)
            }else{
                setFirst_attack(true)
            }
        }, 1500);
        return () => {
            clearInterval(intervalId)
        }
    },[myhealt,enemyhealt,first_attack])

    useEffect(() => {
        if(first_attack) {
            setAnimate_2(false);
            setTimeout(() => {
                setAnimate_1(true);
                setEnemyhealt(enemyhealt - myhero.damage());
            },200)
        }else{
            setAnimate_1(false);
            setTimeout(() => {
                setAnimate_2(true);
                setMyheal(myhealt - enemy.damage());
            },200);
        }
    },[first_attack])
    

    return (
        <>
            {winner === false? (
                <div className="fighting_cont DFL JSTCC" >
                    <div className="DGR GRTRAF MXW820">
                        <div className="DFL FLRW FLWRWR GAP20 ZM085">
                            <span className="healt_state DFL FLCOL P5-10 RD5" > {/* **** My hero healt info **** */}
                                <label htmlFor="MH" className="healt_label DFL GAP5 FLWR">
                                    <i>❤</i>
                                    {myhero.name}
                                </label>
                                <progress className="MXW140"
                                    id="MH" max={myhero.healt} value={myhealt} />
                            </span>
                            <span className="healt_state DFL FLCOL P5-10 RD5"> {/* *** enemy healt info *** */}
                                <label htmlFor="MH" className="healt_label DFL GAP5 FLRW">
                                    <i>❤</i>{enemy.name}
                                </label>
                                <progress className="MXW140" 
                                    max={enemy.healt} value={enemyhealt} />
                            </span>
                        </div>
        
        
                        <div className='fighting_area DFL FLRW JSTCSA PT100' id={animate_1? 'character_atack': animate_2? 'enemy_atack': ""} >
                            <div className={`DFL FLCOL GAP15 PSTR ${first_attack? 'animate1 other1': ""}`}> {/* ******* My hero box ******* */}
                                <div >
                                    <div className="DFL FLCOL JSTCC ALGIC">
                                        <span className="FS11 FWTH6C CWTH"
                                            >{myhero.name}</span>
                                        <div className="DFL FLRW">
                                            <div>
                                                <img src={`/${myhero.avatar}`} width="25" />
                                            </div>
                                            <div className="DFL FLCOL ds_heal_c">
                                                <progress max={myhero.healt} value={myhealt}
                                                    className="sp sp_gn sp_myh W70 PSTR"/>
                                                <progress max={myhero.inteligence} value={myhero.healt}
                                                    className="W70 PSTR sp sp_gn blue_bar"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="DFL mxsqr80 PSTA"> {/*********** zone animation image ************/}


                                    {!animate_1? (
                                        <img className="slct"
                                        src={`/${myhero.image_render[0]}`} />
                                    ): (<Transitions images={myhero.animation.left[0]} />)}

                                        <div class={`container_onda PSTA ${!animate_1? 'DBL': 'DNO'}`}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        
                                </div>
                            </div>
        
        
                            <div className={`DFL FLCOL GAP15 PSTR ${!first_attack? 'animate2 other2': false}`}> {/* ******* Enemy box ***********/}
                                <div >
                                    <div className="DFL FLCOL JSTCC ALGIC">
                                            <span className="FS11 FWTH6C CWTH"
                                                >{enemy.name}</span>
                                            <div className="DFL FLRW">
                                                <div>
                                                    <img src={`/${enemy.avatar}`} width="25" />
                                                </div>
                                                <div className="DFL FLCOL ALGIC ds_heal_c">
                                                    <progress max={enemy.healt} value={enemyhealt}
                                                        className="sp W70 PSTR sp_enemy sp_gn"/>
        
                                                    <progress value={enemy.intelligence} max={enemy.intelligence}
                                                        className="sp W70 PSTR sp_gn blue_bar"/>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="DFL mxsqr80 PSTR"> {/****** zone animation image ******/}

                                    {!animate_2? (
                                        <img className="slct" 
                                        src={`/${enemy.image_render[0]}`} />
                                    ): (<Transitions images={enemy.animation.right[0]} />)}
                                        <div class={`container_onda PSTA ${!animate_2? 'DBL': 'DNO'}`}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):<Winner winner={winner}/>}
        </>
    )
  
}

