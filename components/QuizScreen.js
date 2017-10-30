import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button, View, Text, StyleSheet } from 'react-native'
import QuizView from './QuizScreen/QuizView'
import FinalScoreView from './QuizScreen/FinalScoreView'

class QuizScreen extends Component {
  state = {
    index: 0,
    showAnswer: false,
    correctAnswers: 0,
    over: false,
  }

  componentWillMount() {
    const _title = this.props.deck.title
    this.props.navigation.setParams({name: _title})
  }

  ShowAnswer = () => {
    this.setState(() => ({
      showAnswer: true,
    }))
  }

  Correct = () => {
    const correctAnswers = this.state.correctAnswers + 1
    this.setState(() => ({
      correctAnswers: correctAnswers,
    }))

    this.Next()
  }

  Next = () => {
    const index = this.state.index + 1
    if (index === this.props.deck.cards.length) {
      this.setState(() => ({
        over: true,
      }))
    }
    else {
      this.setState(() => ({
        index: index,
        showAnswer: false,
      }))    
    }

  }

  Restart = () => {
    this.setState(() => ({
      index: 0,
      showAnswer: false,
      correctAnswers: 0,
      over: false,
    }))
  }

  GoBack = () => {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)    
  }

  render() {
    const _currentIndex = this.state.index,
          _currentQuestion = this.props.deck.cards[_currentIndex].question,
          _totalQuestions = this.props.deck.cards.length,
          _answer = this.props.deck.cards[_currentIndex].answer

    return (
      <View style = {styles.deck}>
        {
          this.state.over
            ? <FinalScoreView
                count = {this.state.correctAnswers}
                total = {_totalQuestions}
                onPressRestart = {this.Restart} 
                onPressGoBack = {this.GoBack}
              />
            : <QuizView
                index = {_currentIndex+1}
                count = {_totalQuestions}
                question = {_currentQuestion}
                answer = {_answer}
                showAnswer = {this.state.showAnswer} 
                onPressShowAnswer = {this.ShowAnswer} 
                onPressCorrect = {this.Correct} 
                onPressIncorrect = {this.Next} 
                styles = {styles}
              />
        }
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
  index: {

  },
  title: {
    fontSize: 40,
    paddingTop: 40,
  },
  ansBtn: {

  },
  corrBtn : {

  },
  incorrBtn : {

  }
})

function mapStateToProps({store, activeDeck}) {
  return {
    deck: store[activeDeck.key]
  }
}

export default connect(mapStateToProps)(QuizScreen)
