import { useEffect } from "react";
import { Content } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);
    
    return (
        <Content>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.800</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">- R$12.800</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Content>
    )
}