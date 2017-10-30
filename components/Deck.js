import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default function Deck ({ onPress, deck, styles}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.deck}>
      <View style={styles.deckBackground}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDiscr}>{deck.cards.length} cards</Text>
      </View>
    </TouchableOpacity>
  )
}


