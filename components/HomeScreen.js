import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, TextInput } from 'react-native'
import { activateDeck } from '../actions'

import Deck from './Deck'

class HomeScreen extends Component {
  goDeck = (decks) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckScreen',
    })
    
    const key = decks[0]
    const deck = decks[1]
    this.props.dispatch(activateDeck({key, deck}))
    
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <ScrollView>
        {
          Object.entries(this.props.decks).map((deck, index) => {
            return (
              <Deck 
                key={index}
                deck={deck[1]}
                onPress={this.goDeck.bind(this, deck)}
              />
            )
          })
        }      
      </ScrollView>
    )
  }
}

function mapStateToProps ({store}) {
  return {
    decks: store,
  }
}

export default connect(mapStateToProps)(HomeScreen)
