import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastMsg = () =>{
    return <ToastContainer theme="dark" position="top-center" autoClose={2000}/>
}

export function handleClickErro(text){
    return toast.error(text);
}

export function handleClickSuccess(text){
    return toast.success(text);
}