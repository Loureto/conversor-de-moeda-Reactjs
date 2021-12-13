import { InputText } from '../InputText/InputText';
import { Label } from '../Label/Label';
import './converted.scss';

export const Converted = (props) =>{
    const date = new Date();
    let horas = `${date.getHours()}:${date.getMinutes()}`;
    let data = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    console.log(horas);

    return(
        <div className="content-converted">
            <div>
                <Label label="Data/hora" />
                <InputText type="text" id="inputDataHora" value={`${data}   ${horas}`}/>
                <Label label={props.name} />
                <InputText type="text" id="inputMoeda" value={props.value}/>
                <h2>Moeda convertida: {props.valorconvertido}</h2>
            </div>            
        </div>   
    );
}

