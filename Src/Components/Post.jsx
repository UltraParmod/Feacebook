import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'
import Postheader from './Postheader'
import ImagesPath from '../utlis/ImagesPath'
import { moderateVerticalScale } from 'react-native-size-matters'
import PostFoother from './PostFoother'
import { PostData } from '../data/PostData'

const Post = () => {
  return (
    <View >
    {PostData.map(item=>(
    <View key={item.id}>
      <Postheader data={item}/>
      <Image source={item.postImg}  style={styles.PostImg}/>
      <PostFoother data={item}/>
    </View>
      ))}
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  PostImg:{
    width:'100%',
    height:moderateVerticalScale(250)
  }
})