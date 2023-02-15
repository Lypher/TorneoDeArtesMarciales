import { Link } from "react-router-dom"
import {TfiTwitterAlt, TfiLinkedin} from 'react-icons/tfi'


export function Developers({developers}) {
    console.log(developers)
    return <>
        <div>
            <div className="wrapper820 DFL FLCOL P20 GAP15">
                <span className="DFL RD5 JSTCC FWTH6C M0-A large_tittle">Desarrolladores</span>
                <div className="DGR GRMN220">
                    {developers.map(people => (
                        <div key={people.id}
                            className="DFL FLCOL JSTCC TXTAC ALGIC GAP5 P10">
                            <div className="avtr mxsqr120 OVFH RD50X">
                                <img src={people.avatar} className="slct" />
                            </div>
                            <h3 className="name">{people.name}</h3>
                            <div className="social-links">
                                <Link to={people.linkedin} target="_blank" className="linkedin">
                                    <TfiLinkedin/>
                                </Link>
                                <Link to={people.twitter} className="twitter">
                                    <TfiTwitterAlt/>
                                </Link>
                            </div>
                            <h3 className="rol">{people.rol}</h3>
                            <p className="dtail">{people.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}