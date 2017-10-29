import React, { Component } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

class QuizScreen extends Component {

  Submit = () => {

  }

  render() {
    return (
      <View style={styles.deck}>
        <Text style={styles.index}>index / total</Text>
        <View>
          <Text style={styles.title}>React</Text>
          <Button
            onPress={this.Submit}
            title='Answer'
            style={styles.ansBtn}
          />
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

export default QuizScreen