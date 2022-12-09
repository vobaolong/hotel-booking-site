import { createContext, useReducer } from 'react';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const INITIAL_STATE = {
  city: 'All City',
  dates: [{ startDate: today, endDate: tomorrow, key: 'selection' }],
  options: {
    min: 1,
    max: 9999,
    adult: 1,
    children: 0,
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        cityCt: state.city,
        datesCt: state.dates,
        optionsCt: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
