import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function FinalScoreView ({count, total, onPressRestart, onPressGoBack}) {
  return (
    <View style={styles.card}>
      <View style={styles.resultWraper}>
        <Text style={styles.question}>
          You've answered{'\n'}
          {count} out of {total}{'\n'}
          question correctly.
        </Text>
      </View>

      <View style={styles.cardBtns}>
        <TouchableOpacity onPress = {onPressRestart} style={styles.btn}>
          <Text style={styles.btnText}>Start Over</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {onPressGoBack} style={styles.btn}>
          <Text style={styles.btnText}>Back To Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#f6f7eb',    
  },
  resultWraper: {
    flex: 3,
    maxHeight: 400,
    justifyContent: 'flex-start',
  },
  question: {
    fontSize: 25,
    marginTop: 50,    
    padding: 20,
    textAlign: 'center',
  },
  cardBtns: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 100,
  },
  btn: {
    margin: 20,
    marginTop: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#09814a',
    borderRadius: 7,    
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
  }
})