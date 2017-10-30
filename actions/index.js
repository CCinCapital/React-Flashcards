export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'
export const ACTIVATE_DECK = 'ACTIVATE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
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
