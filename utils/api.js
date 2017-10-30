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

export function addCardToDeck ({ key, card }) {
  return AsyncStorage.getItem(ENTRY_STORAGE_KEY)
          .then(data => {
            const decks = JSON.parse(data)
            decks[key].cards.push(card)

            AsyncStorage.setItem(ENTRY_STORAGE_KEY, JSON.stringify(decks))
          })
}

export function clearDecks () {
  AsyncStorage.clear()
}
