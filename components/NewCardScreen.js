import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

import { addCard } from '../actions'

class NewCardScreen extends Component {
  state = {
    question: '',
    answer: '',
  }

  Submit = () => {
    const key = this.props.deckKey
    const card = this.state

    this.props.dispatch(addCard({key, card}))

    this.goBack()
  }

  goBack = () => {
    const backAction = NavigationActions.back({

    })

    this.props.navigation.dispatch(backAction)
  }

  render() {
    return (
      <View style={styles.deck}>
        <View>
          <TextInput 
            style={styles.txtInp} 
            placeholder='Quiz Question' 
            onChangeText={(e) => (this.setState(() => ({
              question: e,
            })))}
          />
          <TextInput 
            style={styles.txtInp} 
            placeholder='Quiz Answer' 
            onChangeText={(e) => (this.setState(() => ({
              answer: e,
            })))}
          />
          <Button
            disabled={this.state.question === '' || this.state.answer === '' ? true : false}
            onPress={this.Submit}
            title='Submit'
            style={styles.crtBtn}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
  txtInp: {
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    paddingTop: 10,
  },  
  crtBtn : {

  },
})

function mapStateToProps({activeDeck}) {
  return {
    deckKey: activeDeck.key,
  }
}

export default connect(mapStateToProps)(NewCardScreen)
