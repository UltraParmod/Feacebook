import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import SubHeader from '../Components/SubHeader'
import Story from '../Components/Story'
import Post from '../Components/Post'

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SubHeader />
      <Story />
      <Post />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})