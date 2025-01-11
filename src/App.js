import './App.css';
import Button from './components/button/button';
import Shortcut from './components/shortcuts/shortcut';
import Logo from './components/logo/logo';

function App() {
  return (
    <main>
      <sidebar className="sidebar">

          <Logo
          className="logoMeuBanco"
          textoAlt="logotipo meubanco"
          logoImagem="/assets/imgs/Property 1=Default.png"
          pageLogo="#"
          />

        <nav className="navigation">
          <Button buttonType="button-navigation button-navigation-active" iconType="painel" text="Painel"/>
          <Button buttonType="button-navigation" iconType="carteira" text="Carteira"/>
          <Button buttonType="button-navigation" iconType="transferencias" text="Transferências"/>
          <Button buttonType="button-navigation" iconType="servico" text="Serviços"/>
          <Button buttonType="button-navigation" iconType="configuracoes" text="Configurações"/>
        </nav>
        <div className="helpBox">

        </div>
      </sidebar>

      <section className='content'>
        <header>

        </header>
        <div className='shortCuts'>
          <Shortcut number="+23%" numberStyle="lightBg" text="Gasto este mês" money="R$ 3.547,67"/>
          <Shortcut number="+6%" numberStyle="lightBg" text="Recebido esse mês" money="R$ 7.648,48"/>
          <Shortcut number="+R$ 242,13 (+2.54%)" numberStyle="greenBg" text="Investimentos" money="R$ 9.532,62"/>
          <Shortcut number="" numberStyle="" text="Cartões" money="R$ 9.532,62"/>
          <Shortcut number="" numberStyle="" text="" money=""/>
        </div>
        
        <div className="painel">
          
        </div>


      </section>
        
    </main>
  );
}

export default App;
