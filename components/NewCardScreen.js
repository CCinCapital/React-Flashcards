import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, KeyboardAvoidingView, View, Text, TextInput, StyleSheet } from 'react-native'

import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class NewCardScreen extends Component {
  state = {
    question: '',
    answer: '',
  }

  componentWillMount() {
    const _title = this.props.deckKey
    this.props.navigation.setParams({name: _title})
  }

  Submit = () => {
    const key = this.props.deckKey
    const card = this.state
    const { dispatch } = this.props

    addCardToDeck({key, card})
      .then(dispatch(addCard({key, card})))

    this.goBack()
  }

  goBack = () => {
    const backAction = NavigationActions.back({

    })

    this.props.navigation.dispatch(backAction)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.screen} behavior='padding'>
        <View style={styles.card}>
          <View style={styles.inputWraper}>
            <Text style={styles.title}>Create New Card</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder='Quiz Question' 
              onChangeText={(e) => (this.setState(() => ({
                question: e,
              })))}
            />
            <TextInput 
              style={styles.textInput} 
              placeholder='Quiz Answer' 
              onChangeText={(e) => (this.setState(() => ({
                answer: e,
              })))}
            />
          </View>
          <View style={styles.btnWraper}>
            <TouchableOpacity
              style={this.state.question === '' || this.state.answer === '' ? styles.btnDisabled : styles.btn}
              disabled={this.state.question === '' || this.state.answer === '' ? true : false}
              onPress={this.Submit}
            >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    minHeight: 400,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#f6f7eb',    
  },
  title: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
  },
  inputWraper: {
    flex: 3,
    paddingTop: 40,
  },
  textInput: {
    margin: 20,
    padding: 20,
    paddingBottom: 10,
  },
  btnWraper: {
    flex: 1,
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

function mapStateToProps({activeDeck}) {
  return {
    deckKey: activeDeck.key,
  }
}

export default connect(mapStateToProps)(NewCardScreen)
