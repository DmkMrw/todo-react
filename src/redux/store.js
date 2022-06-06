import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
// import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


//selectors
// export const getFilteredCards = ({cards, searchString}, columnId) => cards
//   .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// export const searchInputValue = state => state.searchString;
// export const getFavoriteCard = state => state.cards.filter(card => card.isFavorite === true);

// action creators

// export const addCard = payload => ({ type: 'ADD_CARD', payload });
// export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload })
// export const toggleCardFavorite = payload => ({ type:'TOGGLE_CARD_FAVORITE', payload})


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;