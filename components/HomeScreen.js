import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'
import { activateDeck } from '../actions'

import Deck from './Deck'

class HomeScreen extends Component {
  goDeck = (decks) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckScreen',
    })
    
    const key = decks[0]
    this.props.dispatch(activateDeck(key))
    
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <ScrollView style={styles.screen}>
        {
          Object.entries(this.props.decks).map((deck, index) => {
            return (
              <Deck 
                key={index}
                deck={deck[1]}
                onPress={this.goDeck.bind(this, deck)}
                styles={styles}
              />
            )
          })
        }
        <View style={styles.bottomSpacer}></View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create ({
  screen: {
    backgroundColor: '#393e41' ,
  },
  deck: {
    flexDirection: 'row',
    borderWidth: 20,
    borderBottomWidth: 0,
    borderStyle: 'solid',
    borderColor: '#393e41',
  },
  deckBackground: {
    flex: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,       
    backgroundColor: '#f6f7eb',
  },
  deckTitle: {
    fontSize: 30,
  },
  deckDiscr: {
    fontSize: 20,
    color: '#aaa'
  },
  bottomSpacer: {
    height: 20,
  }
})

function mapStateToProps ({store}) {
  return {
    decks: store,
  }
}

export default connect(mapStateToProps)(HomeScreen)
