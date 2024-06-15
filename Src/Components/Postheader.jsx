import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImagesPath from '../utlis/ImagesPath';
import {Colors} from '../utlis/Colors';
import {scale, moderateScale} from 'react-native-size-matters';
import VectorIcons from '../utlis/VectorIcons';

const Postheader = ({data}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.PostTopSce}>
        <View style={styles.row}>
          <Image source={data.profileImg} style={styles.userprofile} />
          <View style={styles.userSection}>
          <Text style={styles.userName}>{data.name}</Text>
          <View style={styles.row}>
      <Text style={styles.Days}>{data.date}</Text>
      <Text style={styles.dot}>•</Text>
      <VectorIcons
        name="user-friends"
        type="FontAwesome5"
        size={13}
        color={Colors.headerIconGrey}
        style={styles.userIcon}
      />
      </View>

          </View>
        </View>
        <View style={styles.row}>
          <VectorIcons
            name="dots-three-horizontal"
            type="Entypo"
            size={22}
            color={Colors.headerIconGrey}
            style={styles.headerLefticon}
          />
          <VectorIcons
            name="close"
            type="Ionicons"
            size={25}
            color={Colors.headerIconGrey}
          />
        </View>
      </View>
      
      <Text style={styles.captions}>{data.caption}</Text>
    </View>
  );
};

export default Postheader;

const styles = StyleSheet.create({
  postContainer: {
    padding: moderateScale(16),
  },
  userprofile: {
    height: scale(40),
    width: scale(40),
    borderRadius: moderateScale(50),
  },
  row: {
    flexDirection: 'row',
  },
  PostTopSce: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName:{
    fontSize:scale(16),
    color:Colors.textColor,
    marginBottom:moderateScale(2)
  },
  userSection:{
    marginLeft:moderateScale(10)
  },
  Days:{
    fontSize:scale(14),
    color:Colors.textGrey
  },
  dot:{
    fontSize:scale(14),
    color:Colors.textColor,
    paddingHorizontal:moderateScale(8)
  },
  userIcon:{
    marginTop:moderateScale(3)
  },
  headerLefticon:{
    marginRight:moderateScale(20)
  },
  captions:{
    color:Colors.black,
    marginTop:moderateScale(6)
  }
});
