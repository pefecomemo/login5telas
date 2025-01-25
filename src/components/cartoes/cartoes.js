import "./cartoes.css"
import Button from "../button/button.js"

const Cartoes = ({title, limiteDisp, limiteValor, ultimaCompra, localCompra, valorCompra, limiteMesTitle, limiteMesValue, limiteMesTotal, button}) => {
    return <div className="cartoesCard">
                <h3 className="cardTitle">{title}</h3>
                <div className="cardContent">
                    <div className="left-side">
                        <img src="/assets/imgs/Frame 27.png"/>
                        <div className="progressionBarBG">
                            <div className="progressionBarProg"></div>
                        </div>
                        <div className="valoresProgressao">
                            <span>{limiteMesTitle}</span>
                            <div className="limites">
                                <h5>{limiteMesValue}</h5>
                                /
                                <h5>{limiteMesTotal}</h5>
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-side">
                        <h5>{limiteDisp}</h5>
                        <h3>{limiteValor}</h3>

                        <h5>{ultimaCompra}</h5>
                        <h5><b>{localCompra}{valorCompra}</b></h5>
                        <div><Button className="btnMaisMDetalhes" text="MAIS DETALHES"/></div>
                    </div>
                </div>
                

    </div>
}

export default Cartoes