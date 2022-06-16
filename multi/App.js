import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RNBottomSheet } from './Components/RNBottomSheet;'
import { ActivityIndi } from './Components/ActivityIndi';


const App = () => {
  return (
    <View>
      {/* <RNBottomSheet /> */}
      <ActivityIndi />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})