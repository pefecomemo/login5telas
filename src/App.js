import './App.css';
import Button from './components/button/button';
import Shortcut from './components/shortcuts/shortcut';
import Logo from './components/logo/logo';
import HelpBox from './components/helpBox/helpBox';
import Alerta from './components/alerta/alerta';
import Search from './components/search/search';
import Saudacoes from './components/saudacoes/saudacoes';
import Cartoes from './components/cartoes/cartoes';
import UltimasCompras from './components/ultimasCompras/ultimasCompras';
import Login from './components/login/login';
import { useLoginContext } from './contexts/loginContext';

import { useContext } from 'react';

function App() {
//usando contexto
  const {isLoged, userData} = useLoginContext()

  return (

    <main>

  { !isLoged ? <Login /> : <>


      <sidebar className="sidebar">
        <div className="logoDiv">
          <Logo
          className="logoMeuBanco"
          textoAlt="logotipo meubanco"
          logoImagem="/assets/imgs/Property 1=Default.png"
          pageLogo="#"
          />
        </div>  

        <nav className="navigation">
          <Button buttonType="button-navigation button-navigation-active" iconType="painel" text="Painel"/>
          <Button buttonType="button-navigation" iconType="carteira" text="Carteira"/>
          <Button buttonType="button-navigation" iconType="transferencias" text="Transferências"/>
          <Button buttonType="button-navigation" iconType="servico" text="Serviços"/>
          <Button buttonType="button-navigation" iconType="configuracoes" text="Configurações"/>
        </nav>

        <div className="helpBox">
          <HelpBox
            title="Precisa de ajuda?"
            content="Fale com um dos nossos especialistas"
            buttonText ="CONTATAR" />
        </div>
      </sidebar>

      <section className='content'>
        <header>
          <div>
            <Search/>
          </div>
          
          <div>
            <Alerta/>
          </div>

          <div>
            <Saudacoes name={userData?.name ?? "Visitante"}/>
          </div>
          
        </header>
        <div className='shortCuts'>
          <Shortcut number="+23%" numberStyle="lightBg" text="Gasto este mês" money="R$ 3.547,67"/>
          <Shortcut number="+6%" numberStyle="lightBg" text="Recebido esse mês" money="R$ 7.648,48"/>
          <Shortcut number="+R$ 242,13 (+2.54%)" numberStyle="greenBg" text="Investimentos" money="R$ 9.532,62"/>
          <Shortcut number="" numberStyle="" text="Cartões" money="R$ 9.532,62"/>
          <Shortcut number="" numberStyle="" text="" money=""/>
        </div>
        
        <section className="contentMid">
          <div className="painelCartoes">
            <Cartoes 
              title="Cartões"
              limiteDisp="Limite Disponível"
              limiteValor="R$ 3.000,00"
              ultimaCompra="Última Compra"
              localCompra="Bazar Mituzi"
              valorCompra="R$ 300,00" 
              limiteMesTitle="Limite mensal"
              limiteMesValue="R$ 300,00"
              limiteMesTotal="R$ 3000,00"
              buttonText="MAIS DETALHES"
            />
          </div>
          <div className="painelCompras">

            <UltimasCompras 
              className="painelUltimasCompras"
              title="Últimas Compras"
            />
          </div>

          </section>
      </section>

      </>

  }   
        
    </main>

);


}

export default App;
