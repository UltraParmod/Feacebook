import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Colors } from '../utlis/Colors'


const Video = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video</Text>
    </View>
  )
}

export default Video

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:scale(22),
    color:Colors.primaryColor,
    fontWeight:'500'
  }
})