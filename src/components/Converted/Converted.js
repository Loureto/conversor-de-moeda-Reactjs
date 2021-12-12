import './converted.scss';

export const Converted = (props) =>{
    return(
        <div className="content-converted">
            <div>
                <h2>Moeda convertida: {props.valorconvertido}</h2>
            </div>            
        </div>   
    );
}

