import { combineReducers } from 'redux'

import { ADD_ENTRY, ADD_CARD, RECEIVE_DECKS, ACTIVATE_DECK, CLEAR_ALL } from '../actions'

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
    case CLEAR_ALL :
      return {}
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
    case CLEAR_ALL :
      return {}
    default : 
      return state
  }
}

export default combineReducers({
  store, 
  activeDeck,
})