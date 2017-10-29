import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

import { NavigationActions } from 'react-navigation'

class NewCardScreen extends Component {

  Submit = () => {

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
          <TextInput style={styles.txtInp} placeholder='Quiz Question' />
          <TextInput style={styles.txtInp} placeholder='Quiz Answer' />
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

export default NewCardScreen