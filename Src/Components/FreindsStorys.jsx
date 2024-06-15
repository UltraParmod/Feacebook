import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagesPath from '../utlis/ImagesPath'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../utlis/Colors'
import { StoryData } from '../data/SrotyData'


const FreindsStorys = () => {
  return (
   <>
   {StoryData.map(story=>(

     <View style={styles.container} key={story.id}>
    <Image source={story.profileImg}  style={styles.Friendstory}/>
    <View style={styles.IconContainer}>
    <Image source={story.storyImg}  style={styles.Iconstory}/>
    </View>
    <View style={styles.nameContaner}>
    <Text style={styles.nameText}>{story.name}</Text>
    </View>
    </View>
   ))}
   </>
  )
}

export default FreindsStorys

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:Colors.lightGrey,
        borderRadius:moderateScale(10),
        marginLeft:moderateScale(5)

    },
    Friendstory:{
        width:scale(100),
        height:moderateVerticalScale(160),
        borderRadius:moderateScale(10),
        position:'relative'
    },
    Iconstory:{
        height:scale(35),
        width:scale(35),
        borderRadius:moderateScale(20), 
    },
    IconContainer:{
        position:'absolute',
        top:moderateScale(5),
        left:moderateScale(5),
        borderRadius:moderateScale(50),
        borderWidth:2,
        borderColor:Colors.primaryColor
    },
    nameContaner:{
        position:'absolute',
        bottom:moderateScale(5),
        left:moderateScale(5),
       
    },
    nameText:{
        fontSize:moderateScale(14),
        color:Colors.white
    }
})