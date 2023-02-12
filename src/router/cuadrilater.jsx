import { useState, useEffect } from "react"
import { Winner } from "./winner";

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
    const [winner, setWinner] = useState(false)


    useEffect(() => {
        if(myhealt<=0 || enemyhealt<=0){
            myhealt>0? setWinner(myhero): setWinner(enemy)
            return
        }
        const intervalId = setInterval(() => {
            if(first_attack) {
                setEnemyhealt(enemyhealt - myhero.damage());
                setFirst_attack(false)
            }else{
                setMyheal(myhealt - enemy.damage());
                setFirst_attack(true)
            }
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    },[myhealt,enemyhealt,first_attack])
    

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
        
        
                        <div className="fighting_area DFL FLRW JSTCSA PT100">
                            <div className="DFL FLCOL GAP15"> {/* ******* My hero box ******* */}
                                <div>
                                    <div className="DFL FLCOL JSTCC ALGIC">
                                        <span className="FS11 FWTH6C CWTH"
                                            >{myhero.name}</span>
                                        <div className="DFL FLRW">
                                            <div>
                                                <img src={`/${myhero.image}`} width="25" />
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
                                <div className="DFL mxsqr80"> {/*********** zone animation image ************/}


                                    <img className="slct"
                                        src={`/${myhero.animation[0]}`} />


                                        
                                </div>
                            </div>
        
        
                            <div className="DFL FLCOL GAP15"> {/* ******* Enemy box ***********/}
                                <div>
                                    <div className="DFL FLCOL JSTCC ALGIC">
                                            <span className="FS11 FWTH6C CWTH"
                                                >{enemy.name}</span>
                                            <div className="DFL FLRW">
                                                <div>
                                                    <img src={`/${enemy.image}`} width="25" />
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
                                <div className="DFL mxsqr80"> {/****** zone animation image ******/}
                                    <img className="slct" 
                                        src={`/${enemy.animation[0]}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):<Winner winner={winner}/>}
        </>
    )
  
}

