import "./ultimasCompras.css"
import Button from "../button/button.js"

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
        const transactionsReturn = data.transactions.map(transaction => {
          return <div className="transactionMain">
                    <div>
                    <br />
                        <h5><b>{transaction.local}</b></h5>
                        <h5>{transaction.paymentType}</h5>
                    </div>
                    <div>
                        <p>R$ {transaction.value}</p>
                    </div>
                </div>
        });
        return <div>

                    <br />

                    <h5><b>{data.dateTime}</b></h5>
                    {transactionsReturn}
                </div>
      });
    

    return  <div>
        <h4>{title}</h4>
        {shoppingDataReturn}
        <Button text="VER EXTRATO" />
        </div>
    
}

export default UltimasCompras