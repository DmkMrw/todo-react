import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, searchInputValue } from '../../redux/store';
import { useEffect } from 'react';

const SearchForm = () => {


  const currentSearchString = useSelector(searchInputValue)
  const [searchValue, setSearchValue] = useState(currentSearchString);

  const dispatch = useDispatch();

  //clear input and search result
  // useEffect(()=> {
  //   dispatch(updateSearchString(''));
  //   setSearchValue('');
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
  };

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      <Button>
        <span className="fa fa-search"></span>
      </Button>
    </form>
  );
}

export default SearchForm;