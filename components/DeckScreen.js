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
    return (
      <View style={styles.deck}>
        <View>
          <Text style={styles.title}>{this.props.activeDeck.deck.title}</Text>
          <Text style={styles.discr}>{this.props.activeDeck.deck.cards.length} cards</Text>
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

function mapStateToProps({activeDeck}) {
  return {
    activeDeck: activeDeck,
  }
}

export default connect(mapStateToProps)(DeckScreen)