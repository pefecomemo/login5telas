import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Button buttonType="button-navigation button-navigation-active" iconType="painel" text="Painel"/>
          <Button buttonType="button-navigation" iconType="carteira" text="Carteira"/>
          <Button buttonType="button-navigation" iconType="transferencias" text="Transferências"/>
          <Button buttonType="button-navigation" iconType="servico" text="Serviços"/>
          <Button buttonType="button-navigation" iconType="configuracoes" text="Configurações"/>
        
      </header>
    </div>
  );
}

export default App;
