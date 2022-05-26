import style from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = (props) => {

     const [title, setTitle] = useState('');
     const [icon, setIcon] = useState('');

     const handleSubmit = e => {
          e.preventDefault();
          props.action({ title: title, icon: icon });
          setTitle('');
          setIcon('')
     }

     return (
          <form onSubmit={handleSubmit} className={style.columnForm}>
               <span className={style.inputName}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
               <span className={style.inputName}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
               <Button>Add column</Button>
          </form>
     );
};

export default ColumnForm;