import { combineReducers } from 'redux'

import { ADD_ENTRY, ADD_CARD, RECEIVE_DECKS, ACTIVATE_DECK } from '../actions'

function store (state = {}, action) {
  switch(action.type) {   
    case RECEIVE_DECKS :
      const decks = JSON.parse(action.decks)

      return {
        ...state,
        ...decks,
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