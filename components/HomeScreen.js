import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ScrollView, Text, TextInput } from 'react-native'

import Deck from './Deck'

class HomeScreen extends Component {

  render() {
    return (
      <ScrollView>
        {
          Object.entries(this.props.decks).map((deck, index) => {
            return (
              <Deck 
                key={index}
                deck={deck}
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
