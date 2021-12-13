import { InputText } from '../InputText/InputText';
import { Label } from '../Label/Label';
import './converted.scss';

export const Converted = (props) =>{
    const date = new Date();
    let horas = new Intl.DateTimeFormat('pt-BR', {timeStyle: 'medium'}).format(date);
    let data = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'medium'}).format(date);

    console.log(Intl.DateTimeFormat('pt-BR').format(date));

    return(
        <div className="content-converted">
            <div>
                <Label label="Data/hora" />
                <InputText type="text" id="inputDataHora" value={`${data} - ${horas}`}/>
                <Label label={props.name} />
                <InputText type="text" id="inputMoeda" value={props.value}/>
                <h2>Moeda convertida: {props.valorconvertido}</h2>
            </div>            
        </div>   
    );
}

