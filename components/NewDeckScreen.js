import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, View, KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native'

import { addEntry, activateDeck } from '../actions'

class NewDeckScreen extends Component {
  state = {
    title: '',
  }

  handleEdit = (e) => {
    this.setState(() => ({
      title : e,
    }))
  }

  Submit = () => {
    const key = this.state.title

    this.props.dispatch(addEntry({
      [key] : {
        title: key,
        cards: [],
      }
    }))

    this.setState(() => ({
      title: ''
    }))

    this._textInput.clear()

    this.toDeck(key)
  }

  toDeck = (key) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckScreen',
    })

    this.props.dispatch(activateDeck(key))

    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.screen} behavior='padding'>
        <View style={styles.card}>
          <Text style={styles.title}>What's the title of your new deck?</Text>
          <TextInput
            style={styles.textInput} 
            placeholder='Deck Title'
            autoCapitalize= 'words'
            onChangeText={this.handleEdit}
            clearTextOnFocus={true}
            ref={component => this._textInput = component}
          />
          <TouchableOpacity
            style={this.state.title === '' ? styles.submitBtnDisabled : styles.submitBtn}
            disabled={this.state.title === '' ? true : false}
            onPress={this.Submit}
          >
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
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
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#f6f7eb',
  },
  title: {
    fontSize: 30,
    padding: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  textInput: {
    margin: 20,
    padding: 20,
    paddingBottom: 10,
  },  
  submitBtn: {
    margin: 20,
    padding: 10,
    backgroundColor: '#09814a',
    borderRadius: 7,
  },
  submitBtnDisabled: {
    margin: 20,
    padding: 10,
    backgroundColor: '#aaa',
    borderRadius: 7,
  },
  submitBtnText: {
    textAlign: 'center',
    color: '#ddd',
  }
})

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(NewDeckScreen)
