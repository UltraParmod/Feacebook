import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagesPath from '../utlis/ImagesPath'
import { Colors } from '../utlis/Colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import VectorIcons from '../utlis/VectorIcons'

const CreateStory = () => {
  return (
    <View style={styles.createStory}>
    <Image source={ImagesPath.img1} style={styles.profileImg}/>
    <View style={styles.iconContainer}>
    <VectorIcons 
        name='add-circle'
        type='Ionicons'
        size={35}
        color={Colors.primaryColor}
    />
    </View>
      <Text style={styles.createStorytitle}>CreateStory</Text>
    </View>
  )
}

export default CreateStory

const styles = StyleSheet.create({
    createStory:{
        backgroundColor:Colors.storyImageBg,
        borderWidth:1,
        borderColor:Colors.lightGrey,
        borderRadius:moderateScale(10),
        alignItems:'center',
        position:'relative'
    },
    profileImg:{
        width:scale(110),
        height:moderateVerticalScale(110),
        borderTopLeftRadius:moderateScale(10),
        borderTopRightRadius:moderateScale(10)
    },
    iconContainer:{
        position:'absolute',
        bottom:moderateScale(35
        ),
        backgroundColor:Colors.white,
        borderRadius:moderateScale(50)
    },
    createStorytitle:{
        fontSize:scale(14),
        color:Colors.black,
        textAlign:'center',
        marginVertical:moderateScale(15),
        fontWeight:'600'
    }
})