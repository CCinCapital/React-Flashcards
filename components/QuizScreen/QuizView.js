import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import TextAnswer from './TextAnswer'

export default function QuizView ({index, count, question, answer, showAnswer, onPressShowAnswer, onPressCorrect, onPressIncorrect}) {
  return (
    <View style={styles.card}>
      <Text style={styles.index}>{index} / {count}</Text>
      <View style={styles.questionWraper}>
        <Text style={styles.question}>{question}</Text>
        {
          showAnswer
            ? <TextAnswer style={styles.answer}>
                {answer}
              </TextAnswer>
            : <TouchableOpacity onPress={onPressShowAnswer}>
                <Text style={styles.ansBtnText}>Show Answer</Text>
              </TouchableOpacity>
        }
      </View>

      <View style={styles.cardBtns}>
        <TouchableOpacity onPress={onPressCorrect} style={styles.correctBtn}>
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressIncorrect} style={styles.incorrectBtn}>
          <Text style={styles.btnText}>Incorrect</Text>
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
  index: {
    paddingTop: 10,
    paddingRight: 16,
    textAlign: 'right',
  },
  questionWraper: {
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
  ansBtnText: {
    color: '#aaa',
    textAlign: 'center',
  },
  answer: {
    fontSize: 18,
    padding: 20,
    paddingTop: 5,
    textAlign: 'center',
    color: '#aaa',
  },
  cardBtns: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 100,
  },
  correctBtn: {
    margin: 20,
    marginTop: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#09814a',
    borderRadius: 7,    
  },
  incorrectBtn: {
    margin: 20,
    marginTop: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#aaa',
    borderRadius: 7,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
  }
})