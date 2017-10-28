import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { activateDeck } from '../actions'

class Deck extends Component {

  handleClick = (e) => {
    const deck = this.props.deck

    this.props.dispatch(activateDeck({
      deck,
    }))

    // this.toDeck()
  }

  // toDeck = () => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: 'DeckScreen'
  //   })
  //   this.props.navigation.dispatch(navigateAction)
  // }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick} style={styles.deck}>
        <Text style={styles.title}>{this.props.deck[1].title}</Text>
        <Text style={styles.discr}>{this.props.deck[1].cards.length} cards</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#aaa',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
  discr: {
    fontSize: 20,
    color: '#aaa'
  }
})

export default connect()(Deck)

