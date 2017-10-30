import React, { Component } from 'react'
import { Text } from 'react-native'

export default function TextAnswer ({children, style}) {
  return (
    <Text style={style}>
      {children}
    </Text>
  )
}
