import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ImagesPath from '../utlis/ImagesPath'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { Colors } from '../utlis/Colors'

const SubHeader = () => {
  return (
    <View style={styles.container}>
    <Image source={ImagesPath.img1} style={styles.profileStyle}/>


    <View style={styles.inputStyle}>
        <Text style={styles.inputTitle}>Write Something here..</Text>
        <Text style={styles.inputTitle}>यहाँ कुछ लिखें</Text>
    </View>
        <Image source={ImagesPath.cameraroll} style={styles.cameraroll}/>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:moderateScale(14),
        backgroundColor:Colors.white,
        alignItems:'center'
    },
    profileStyle:{
        width:scale(40),
        height:moderateVerticalScale(40),
        borderRadius:moderateScale(20)
    },
    cameraroll:{

    },
    inputStyle:{
        borderWidth:1,
        borderColor:Colors.borderGrey,
        borderRadius:moderateScale(30),
        paddingHorizontal:moderateScale(20),
        paddingVertical:moderateScale(8),
        width:'70%'
    },
    inputTitle:{
        fontSize:scale(14),
        color:Colors.grey
    }
})