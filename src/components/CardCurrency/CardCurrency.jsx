import React from 'react';
import api from '../../services/api';

import { Repeat } from 'react-feather';
import { DollarSign } from 'react-feather';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/button.scss';
import '../../styles/cardcurrency.scss';
import '../../styles/converted.scss';

import ReactLoading from 'react-loading';


export const CardCurrency = () => {
    const [moedaBValor, setMoedaBValor] = React.useState(''); 
    const [moeda, setMoeda] = React.useState([]);    
    const [moedaSelecionada, setMoedaSelecionada] = React.useState('');  
    const [valorconvertido, setValorConvertido] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    const handleChange = (e) =>{  
        e.preventDefault();           
    }

    async function converter(){
        try{        
            if(moedaSelecionada === '' || moedaSelecionada === null){                
                return toast.error('Selecione o tipo de moeda!');
            }
            if(moedaBValor === 0 || moedaBValor === ''){
                return toast.error('Preencha o valor a ser convertido!');
            }

            console.log(moedaBValor);
            const reponse = await api.get(`all/${moedaSelecionada}-BRL`);            
            let resultado = (reponse.data[moedaSelecionada].ask * parseFloat(moedaBValor));
            setValorConvertido(`R$ ${resultado.toFixed(2)}`);       
        } catch(e){            
            return toast.error('Error ao tentar converter!');
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
                <ReactLoading className="loading" type="spin" color="blue" />
            </div>
        );
    }else{
    
        return(
            <div className="container-currency" > 
                <form className="container" onSubmit={handleChange}>
                    <DollarSign className="icon-dollar" size={50}/>
                    <h1>Conversor de Moeda</h1>
                    <div className="content">
                        <label>Selecione o tipo de moeda:</label>
                        <select name="currency" id="currency" defaultValue="Selecione..." autoFocus onChange={({target}) => setMoedaSelecionada(target.value)}>
                            <option disabled >Selecione...</option>
                            {moeda.map((item) =>{
                                return <option key={item.key} value={item.value}>{item.label}</option> 
                            })}                                                                       
                        </select> 
                        <div className="input-text">
                            <label>Insira o valor a ser convertido:</label>
                            <input type="number" onChange={({ target }) => setMoedaBValor(target.value)} />                        
                        </div>                    
                    </div>

                    <button onClick={converter} className="button">
                        <Repeat className="icon-repeat"/>
                        Converter
                    </button>               
                </form>          
                                    
                {valorconvertido !== 0 && (                
                    <div className="content-converted">
                        <div>
                            <h2>Moeda convertida: {valorconvertido}</h2>
                        </div>            
                    </div>                
                )}
                <ToastContainer theme="dark" position="top-right"/>
            </div>
        );
    }
}


