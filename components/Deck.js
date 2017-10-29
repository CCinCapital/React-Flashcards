import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default function Deck ({ onPress, deck}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.deck}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.discr}>{deck.cards.length} cards</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#aaa',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
  discr: {
    fontSize: 20,
    color: '#aaa'
  }
})


