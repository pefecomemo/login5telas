import "./logo.css"

const Logo = ( {textoAlt, logoImagem, pageLogo}) => {
    return <a href={pageLogo || "#"} > <img src={logoImagem} alt={textoAlt}/>
    </a>
}

export default Logo