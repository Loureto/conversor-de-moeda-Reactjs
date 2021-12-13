import './inputtext.scss';

export const InputText = (props) =>{
    return <input className="input-text" id={props.id} value={props.value} onChange={props.onChange} type={props.type} />
}