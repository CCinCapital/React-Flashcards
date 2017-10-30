import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { ScrollView, View, Button, Text, TextInput, StyleSheet } from 'react-native'
import { receiveDecks, activateDeck } from '../actions'
import { fetchDecks, clearDecks } from '../utils/api'
import { AppLoading } from 'expo'

import Deck from './Deck'

class HomeScreen extends Component {

  state = {
    ready : false,
  }

  componentDidMount () {
    const { dispatch } = this.props

    fetchDecks()
      .then((decks) => {dispatch(receiveDecks(decks))})
      .then(() => this.setState({ready: true}))
  }

  goDeck = (decks) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckScreen',
    })
    
    const key = decks[0]
    this.props.dispatch(activateDeck(key))
    
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if(ready === false) {
      return <AppLoading />
    }

    return (
      <ScrollView style={styles.screen}>
        {
          Object.entries(decks).map((deck, index) => {
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
        {
          Object.keys(decks).length === 0
            ? null
            : <Button title='WARNING: WIPE ASYNCSTORAGE' onPress={clearDecks}/>
        }
        
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
