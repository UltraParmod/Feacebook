import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagesPath from '../utlis/ImagesPath';
import VectorIcons from '../utlis/VectorIcons';
import {Colors} from '../utlis/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={ImagesPath.fblogo} style={styles.fblogo} />

      <View style={styles.vectorstyle}>
        <VectorIcons
          name="add-circle"
          type="MaterialIcons"
          color={Colors.black}
          size={25}
        />
        <VectorIcons
          name="search"
          type="FontAwesome"
          color={Colors.black}
          size={25}
        />
        <VectorIcons
          name="messenger"
          type="Fontisto"
          color={Colors.black}
          size={25}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  fblogo: {
    width: scale(130),
    height: moderateVerticalScale(35),
    resizeMode: 'contain',
  },
  vectorstyle: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
});
