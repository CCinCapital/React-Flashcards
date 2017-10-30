import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, View, Text, StyleSheet } from 'react-native'

function TextAnswer ({children}) {
  return (
    <Text>
      {children}
    </Text>
  )
}

class QuizScreen extends Component {
  state = {
    index: 0,
    showAnswer: false,
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

  Submit = () => {

    this.next()
  }

  next = () => {
    const index = this.state.index + 1
    this.setState(() => ({
      index: index,
    }))
  }

  render() {
    const _currentIndex = this.state.index,
          _currentQuestion = this.props.deck.cards[_currentIndex].question,
          _totalQuestions = this.props.deck.cards.length,
          _answer = this.props.deck.cards[_currentIndex].answer

    return (
      <View style={styles.deck}>
        <Text style={styles.index}>{this.state.index + 1} / {_totalQuestions}</Text>
        <View>
          <Text style={styles.title}>{_currentQuestion}</Text>
          {
            this.state.showAnswer 
            ? <TextAnswer>
                {_answer}
              </TextAnswer>
            : <Button
                onPress={(this.ShowAnswer)}
                title='Answer'
                style={styles.ansBtn}
              />
          }
        </View>

        <View>
          <Button
            onPress={this.Submit}
            title='Correct'
            style={styles.corrBtn}
          />
          <Button
            onPress={this.Submit}
            title='Incorrect'
            style={styles.incorrBtn}
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
