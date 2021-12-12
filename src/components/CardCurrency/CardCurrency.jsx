import React from 'react';
import api from '../../services/api';
import { Repeat } from 'react-feather';
import { DollarSign } from 'react-feather';
import { Loading } from '../Loading/Loading';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { Label } from '../Label/Label';
import { Converted } from '../Converted/Converted';
import { handleClickErro, handleClickSuccess, ToastMsg } from '../../util/mensagem';
import './cardcurrency.scss';


export const CardCurrency = () => {
    const [moedaBValor, setMoedaBValor] = React.useState(''); 
    const [moeda, setMoeda] = React.useState([]);    
    const [moedaSelecionada, setMoedaSelecionada] = React.useState('');  
    const [valorconvertido, setValorConvertido] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const [ask, setAsk] = React.useState('');
    const [name, setName] = React.useState('');

    const handleChange = (e) =>{  
        e.preventDefault();           
    }

    async function converter(){
        try{        
            if(moedaSelecionada === '' || moedaSelecionada === null){                
                return handleClickErro('Selecione o tipo de moeda!');
            }
            if(moedaBValor === 0 || moedaBValor === ''){
                return handleClickErro('Preencha o valor a ser convertido!');
            }

            handleClickSuccess("Moeda convertida com sucesso!");
            const reponse = await api.get(`all/${moedaSelecionada}-BRL`);            
            let resultado = (reponse.data[moedaSelecionada].ask * parseFloat(moedaBValor));
            setAsk(reponse.data[moedaSelecionada].ask);
            setName(reponse.data[moedaSelecionada].name);
            setValorConvertido(`R$ ${resultado.toFixed(2)}`);       
        } catch(e){            
            return handleClickErro('Error ao tentar converter!');
        }
    }

    React.useEffect(() =>{
        async function loadingMoeda() {
            const response = await api.get('all');            
            
            let array= [];
            Object.keys(response.data).map((key) =>{
               return array.push({
                    key: key,
                    value: key,
                    label: key
                })
            })
            setMoeda(array)
            setLoading(false)
        }

        loadingMoeda()    
    },[]);    

    if(loading){
        return( 
            <div className="load">
                <Loading />
            </div>
        );
    }else{
        return(
            <div className="container-currency" > 
                <form className="container" onSubmit={handleChange}>
                    <DollarSign className="icon-dollar" size={50}/>
                    <h1>Conversor de Moeda</h1>
                    <div className="content">
                        <Label label="Selecione o tipo de moeda:"/>
                        <select name="currency" id="currency" defaultValue="Selecione..." autoFocus onChange={({target}) => setMoedaSelecionada(target.value)}>
                            <option disabled >Selecione...</option>
                            {moeda.map((item) =>{
                                return <option key={item.key} value={item.value}>{item.label}</option> 
                            })}                                                                       
                        </select> 
                            <Label label="Insira o valor a ser convertido:"/>
                            <InputText type="number" onChange={({ target }) => setMoedaBValor(target.value)}/>                                          
                    </div>
                    <Button onClick={converter} label="Converter">
                        <Repeat className="icon-repeat"/>
                    </Button>                        
                </form>          
                
                <div className="resultado">
                    <h2>Resultado</h2>
                {valorconvertido !== 0 && (                
                    <Converted valorconvertido={valorconvertido} value={ask} name={name} />             
                )}
                </div>
                <ToastMsg />
            </div>
        );
    }
}


