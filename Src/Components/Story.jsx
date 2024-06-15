import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../utlis/Colors'
import { moderateScale } from 'react-native-size-matters'
import CreateStory from './CreateStory'
import FreindsStorys from './FreindsStorys'

const Story = () => {
  return (
    <ScrollView horizontal style={styles.StoryContainer} 
      contentContainerStyle={styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}
    >
      <CreateStory />
      <FreindsStorys />
    </ScrollView>
  )
}

export default Story

const styles = StyleSheet.create({
  contentContainerStyle:{
      paddingRight:moderateScale(30)
  },
    StoryContainer:{
        backgroundColor:Colors.white,
        marginTop:moderateScale(8),
        padding:moderateScale(15)
    }
})