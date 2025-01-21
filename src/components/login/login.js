import { useState } from "react"
import "./login.css"
import { useLoginContext } from "../../contexts/loginContext"

const Login = ({}) => {
    const {setIsLoged, setUserData} = useLoginContext()

    const [userName, setUserName] = useState ("")
    const [password, setPassword] = useState ("")
    const [lembrar, setLembrar] = useState ("")
    const [msgLogin, setMsgLogin] = useState ("")
    
    const loginUsuario = "user" //usuário chumbado para efeito de "prova"
    const senhaUsuario = "pass"

    const handleSubmit = (e) => {
        e.preventDefault()
        setMsgLogin("")
        if(!(loginUsuario == userName && senhaUsuario == senhaUsuario) ) {
            setMsgLogin(<p>Favor verificar suas credenciais</p>)
            return 
        }

        setIsLoged(true)
        setUserData({name: "Tide Cardoso"})

    }

    return <div className="telaLogin">
        <div className="bg-wrapper">
            <img className="bg" src="/assets/imgs/portrait-woman-holding-card 1.png"/>
            <img class="logo" src="/assets/imgs/logobranco.png" alt="Logotipo" />

        </div>
        
        <div className="blocoForm">
            <form onSubmit={handleSubmit} className="loginForm">
            
                <div className="loginBloco1">
                    <h1>Bem vindo <span>:)</span></h1>   
                    <h2>Entre na sua conta</h2>
                </div>

                <div className="loginBloco2">
                    <label> Usuário
                        <input
                            type="text"
                            id="User"
                            name="name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                    </label>
                    <label>Senha
                        <input
                            type="password"
                            id="password"
                            name="senha" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    
                    <div className="suporteLogin">
                        <div className="suporteLoginLembrar">
                            <input
                                type="checkbox"
                                id="lembrar"
                                name="lembrar"
                                value={lembrar}
                                onChange={(e) => setLembrar(e.target.value)}/>
                            <label for="lembrar"> Lembrar dispositivo </label>
                        </div>


                        <a href="#">Esqueceu sua senha?</a>
                        

                    </div>
                    {msgLogin}
                </div>
                <div className="loginBloco3">
                    <button className="access">Entrar</button>
                    <h2>Não tem conta? <span>Faça uma agora</span></h2>
                </div>

            </form>
        </div>




    </div>
}

export default Login