import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

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
    const _totalCards = this.props.decks[_deckIndex].cards.length

    return (
      <View style={styles.screen}>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.title}>{_deckTitle}</Text>
            <Text style={styles.discrption}>{_totalCards} cards</Text>
          </View>

          <View style={styles.cardBtns}>
            <TouchableOpacity style={styles.btn} onPress={this.NewCard}>
              <Text style={styles.btnText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={_totalCards === 0 ? styles.btnDisabled : styles.btn}          
              disabled={_totalCards === 0 ? true : false}
              onPress={this.StartQuiz}
            >
              <Text style={styles.btnText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#393e41',
  },
  card: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#f6f7eb',    
  },
  cardTitle: {
    flex: 3,
    maxHeight: 300,
    justifyContent: 'center',
  },
  title: {
    maxHeight: 100,
    fontSize: 30,
    marginTop: 50,    
    padding: 20,
    paddingBottom: 5,
    textAlign: 'center',
  },
  discrption: {
    maxHeight: 100,
    fontSize: 20,
    textAlign: 'center',
    color: '#aaa',
  },
  cardBtns: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#09814a',
    borderRadius: 7,    
  },
  btnDisabled: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#aaa',
    borderRadius: 7,
  },
  btnText: {
    textAlign: 'center',
    color: '#eee',
  }
})

function mapStateToProps({store, activeDeck}) {
  return {
    decks: store,
    activeDeck: activeDeck,
  }
}

export default connect(mapStateToProps)(DeckScreen)