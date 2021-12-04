import '../../styles/cardCurrency.scss';
import { Button } from '../Button/button';

export const CardCurrency = () => {
    return(
        <div className="container-currency">
            <div className="container">
                <div className="content">
                    <label>Selecione o tipo de moeda:</label>
                    <select name="currency" id="currency">
                        <option></option>
                    </select>
                    <div className="input-text">
                        <label>Insira o valor a ser convertido:</label>
                        <input type="text" />
                    </div>
                </div>
                <Button />
            </div>
        </div>
    );
}
