import "./ultimasCompras.css"
import Button from "../button/button.js"
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


const UltimasCompras = ( {title, text} ) => {
    
    const shoppingData = [
        {
            dateTime: "2025-01-03T00:00:00",
            transactions: [
                {
                    local: "Bazar Mizutu",
                    paymentType: "Compra no crédito",
                    value: 300.00,
                },
                {
                    local: "Lanchonete Dez",
                    paymentType: "Compra no débito",
                    value: 125.00,
                },
                {
                    local: "Loja Tatame velho",
                    paymentType: "Compra no débito",
                    value: 700.00,
                }
            ]
        },
        {
            dateTime: "2025-01-02T00:00:00",
            transactions: [
                {
                    local: "Bazar Mizutu",
                    paymentType: "Compra no crédito",
                    value: 12.00,
                },
                {
                    local: "Lanchonete Dez",
                    paymentType: "Compra no débito",
                    value: 85.00,
                },
                {
                    local: "Loja Tatame velho",
                    paymentType: "Compra no débito",
                    value: 200.00,
                }
            ]
        },
        {
            dateTime: "2025-01-01T00:00:00",
            transactions: [
                {
                    local: "Restaurante Italiano",
                    paymentType: "Compra no débito",
                    value: 300.00,
                }
            ]
        },
        
      ];


     
      const shoppingDataReturn = shoppingData.map(data => {
        const date = new Date(data.dateTime);
        const formattedDate = format(date, "dd/MMM", { locale: ptBR });
        

        const transactionsReturn = data.transactions.map(transaction => {
          return <div className="transactionMain">
                    <div>
                    <br />
                        <h4><b>{transaction.local}</b></h4>
                    </div>
                    <div className="tipoPgto_Valor">
                        <span className="tipoDePagamento">{transaction.paymentType} </span>
                        <span className="valorDaCompra">R$ {transaction.value}</span>
                    </div>
                </div>
        });
        return <div>

                    <br />

                    <h5><b>{formattedDate}</b></h5>
                    <div className="diaDaCompra">{transactionsReturn}</div>
                </div>
      });
    

    return  <div className="comprasDiv">
        <h3>{title}</h3>
        {shoppingDataReturn}
        <Button className="btnExtrato" text="VER EXTRATO" />
        </div>
    
}

export default UltimasCompras