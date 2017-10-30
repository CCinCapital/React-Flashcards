import { AsyncStorage } from 'react-native'

const ENTRY_STORAGE_KEY = 'Flashcards:decks'

export function fetchDecks () {
  return AsyncStorage.getItem(ENTRY_STORAGE_KEY)
}

export function addDeck ({ key, deck }) {
  return AsyncStorage.mergeItem(ENTRY_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}
