import { combineReducers } from 'redux'

import { ADD_ENTRY, ADD_CARD, RECEIVE_ENTRIES, ACTIVATE_DECK } from '../actions'

const initialState = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',              
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
    ]
  }
}

function store (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ENTRIES :
      return {
        ...state,
        ...action.entries,
      }
    case ADD_ENTRY : 
      return {
        ...state,
        ...action.entry,
      }
    case ADD_CARD :
      return {
        ...state,
        [action.key] : {
          ...state[action.key],
          cards : [...state[action.key].cards, action.card],
        }
      }
    default : 
      return state
  }
}

function activeDeck (state = {}, action) {
  switch(action.type) {
    case ACTIVATE_DECK :
      return {
        ...state,
        key: action.key,
      }
    default : 
      return state
  }
}

export default combineReducers({
  store, 
  activeDeck,
})