import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { Button, View, Text, StyleSheet } from 'react-native'

class DeckScreen extends Component {

  NewCard = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'NewCardScreen',
    })

    this.props.navigation.dispatch(navigateAction)
  }

  StartQuiz = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'QuizScreen',
    })

    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const _deckIndex = this.props.activeDeck.key
    const _deckTitle = this.props.decks[_deckIndex].title
    const _deckDiscr = this.props.decks[_deckIndex].cards.length

    return (
      <View style={styles.deck}>
        <View>
          <Text style={styles.title}>{_deckTitle}</Text>
          <Text style={styles.discr}>{_deckDiscr} cards</Text>
        </View>

        <View>
          <Button
            onPress={this.NewCard}
            title='Add Card'
            style={styles.addBtn}
          />
          <Button
            onPress={this.StartQuiz}
            title='Start Quiz'
            style={styles.strBtn}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    paddingTop: 40,
  },
  discr: {
    fontSize: 20,
    color: '#aaa',
    paddingTop: 5,
    textAlign: 'center',
  },
  addBtn : {
    color: '#000'
  },
  strBtn : {

  }
})

function mapStateToProps({store, activeDeck}) {
  return {
    decks: store,
    activeDeck: activeDeck,
  }
}

export default connect(mapStateToProps)(DeckScreen)