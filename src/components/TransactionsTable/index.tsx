import { useEffect } from "react";
import { api } from "../../services/api";
import { Content } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data))
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