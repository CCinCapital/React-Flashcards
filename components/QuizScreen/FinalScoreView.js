import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default function FinalScoreView ({count, total, onPressRestart, onPressGoBack}) {
  return (
    <View>
      <Text>
        You've scored {count} out of {total} question.
      </Text>
      <View>
        <Button
          title = 'Start Over'
          onPress = {onPressRestart}
        />
        <Button
          title = 'Back To Deck'
          onPress = {onPressGoBack}
        />
      </View>
    </View>
  )
}