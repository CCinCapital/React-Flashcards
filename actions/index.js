export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_ENTRY = 'ADD_ENTRY'
export const ACTIVATE_DECK = 'ACTIVATE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}

export function activateDeck (key) {
  return {
    type: ACTIVATE_DECK,
    key,
  }
}

export function addCard ({key, card}) {
  return {
    type: ADD_CARD,
    key,
    card,
  }
}
