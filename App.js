import React from 'react';
import { View, Platform, StatusBar, FlatList, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen'
import DeckScreen from './components/DeckScreen'
import NewDeckScreen from './components/NewDeckScreen'
import QuizScreen from './components/QuizScreen'
import NewCardScreen from './components/NewCardScreen'

import reducer from './reducers'

function PhoneStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MyDecksTab = TabNavigator(
{ // Route Configs
  MyDecks: { 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'My Decks'
    },
  },
  NewDeckScreen: { 
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  },
}, 
{ // Navigator Configs
  // tabBarPosition: 'bottom',  
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      height: 45,
      backgroundColor: '#444054',
    }
  }
})

const RootNav = StackNavigator(
{
  Home: { 
    screen: MyDecksTab,
  },
  DeckScreen: { 
    screen: DeckScreen,
  },
  NewCardScreen: {
    screen: NewCardScreen,
    navigationOptions: {
      title: 'Create New Card'
    }
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params ? navigation.state.params.name : ''}`,
    })
  }
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      height: 45,
      backgroundColor: '#444054',
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <PhoneStatusBar backgroundColor='#fff' barStyle='light-content' />
          <RootNav />
        </View>
      </Provider>
    );
  }
}

