import { combineReducers } from 'redux'

import { ADD_ENTRY, RECEIVE_ENTRIES, ACTIVATE_DECK } from '../actions'

const initialState = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        choices: [
          {
            answer: 'A library for managing user interfaces',
            isCorrect: true,            
          },
          {
            answer: 'A library for managing user experiences',               
          }
        ],
      },
      {
        question: 'Where do you make Ajax requests in React?',
        choices: [
          {
            answer: 'The componentDidMount lifecycle event',
            isCorrect: true,
          },
          {
            answer: 'The componentWillMount lifecycle event',
          }
        ]
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        choices: [
          {
            answer: 'The combination of a function and the lexical environment within which that function was declared.',
            isCorrect: true
          },
          {
            answer: 'The combination of a variable and the lexical environment within which that function was declared.',
          }
        ]
      }
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
        deck: action.deck,
      }
    default : 
      return state
  }
}

export default combineReducers({
  store, 
  activeDeck,
})