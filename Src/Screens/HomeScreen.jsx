import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import TopTabar from '../Components/TopTabar'

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <TopTabar />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})