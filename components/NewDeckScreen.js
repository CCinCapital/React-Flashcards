import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

import { addEntry } from '../actions'

class NewDeckScreen extends Component {
  state = {
    title: null,
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
        cards: []
      }
    }))

    this.setState(() => ({
      title: null
    }))

    this._textInput.clear()

    this.toHome()
  }

  toHome = () => {
    const backAction = NavigationActions.back({
      key: 'NewDeckScreen'
    })
    this.props.navigation.dispatch(backAction)
  }

  render() {
    return (
      <View style={styles.deck}>
        <View>
          <Text style={styles.title}>What's the title of your new deck?</Text>
          <TextInput
            style={styles.txtInp} 
            placeholder='Deck Title'
            autoCapitalize= 'words'
            onChangeText={this.handleEdit}
            clearTextOnFocus={true}
            ref={component => this._textInput = component}
          />
          <Button
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

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(NewDeckScreen)
