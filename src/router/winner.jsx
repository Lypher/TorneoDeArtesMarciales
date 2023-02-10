export function Winner({winner}) {
    return <>
        <div>
            <div className="wrapper820 DFL FLCOL P20 GAP15">
                <span className="DFL MXW150 RD5 JSTCC FWTH6C M0-A large_tittle">WINNER</span>
                <span className="large_text">🏆 {winner.name}</span>
                <div className="DGR GAP20 GRMN150">
                    <div className="mxsqr80 RD10 OVFH M0-A PSTR">
                        <img className="slct "
                            src={`/${winner.image}`} alt="" />
                    </div>
                    <div className="DFL FLCOL GAP10 JSTCC ALGIC">
                        <button className="large_button TRST05 nowrap">Empezar de Nuevo</button>
                        <button className="large_button TRST05 nowrap">Mapa de Posiciones</button>
                        <button className="large_button TRST05 nowrap">Proxima Batalla</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}