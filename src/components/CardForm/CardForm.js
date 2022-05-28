import Button from "../Button/Button";
import { useState } from "react";
import TextInput from './../TextInput/TextInput';
import style from './CardForm.module.scss';
import { useDispatch } from 'react-redux';

const CardForm = (props) => {

     const [title, setTitle] = useState('');

     const dispatch = useDispatch();

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch({ type: 'ADD_CARD', payload: { title, columnId:props.columnId} });
          setTitle('')
     };

     return (
          <form className={style.cardForm} onSubmit={handleSubmit}>
               <TextInput value={title} onChange={e => setTitle(e.target.value)} />
               <Button>Add Card</Button>
          </form>
     );
}

export default CardForm;