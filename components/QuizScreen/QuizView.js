import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import TextAnswer from './TextAnswer'

export default function QuizView ({index, count, question, answer, showAnswer, onPressShowAnswer, onPressCorrect, onPressIncorrect , styles}) {
  return (
    <View style={styles.deck}>
      <Text style={styles.index}>{index} / {count}</Text>
      <View>
        <Text style={styles.title}>{question}</Text>
        {
          showAnswer
            ? <TextAnswer>
                {answer}
              </TextAnswer>
            : <Button
                onPress={onPressShowAnswer}
                title='Answer'
                style={styles.ansBtn}
              />
        }
      </View>

      <View>
        <Button
          onPress={onPressCorrect}
          title='Correct'
          style={styles.corrBtn}
        />
        <Button
          onPress={onPressIncorrect}
          title='Incorrect'
          style={styles.incorrBtn}
        />
      </View>
    </View>
  )
}