import './inputtext.scss';

export const InputText = (props) =>{
    return <input className="input-text" onChange={props.onChange} type={props.type} />
}