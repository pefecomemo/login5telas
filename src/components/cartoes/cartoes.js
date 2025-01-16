import "./cartoes.css"

const Cartoes = ({title, limiteDisp, limiteValor, ultimaCompra, localCompra, valorCompra, limiteMesTitle, limiteMesValue, limiteMesTotal, buttom}) => {
    return <div className="cartoesCard">
                <div className="left-side">
                    <h3>{title}</h3>
                    <img src=""/>
                    <div className="progressionBarBG">
                        <div className="progressionBarProg">
                        </div>
                    </div>
                </div>

    </div>
}

export default Cartoes