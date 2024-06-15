import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {Colors} from '../utlis/Colors';

const Setting = () => {
  return (
    <View style={styles.container}>
      <View />

      <View>
        <Text style={styles.title}>Setting</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.Logout}>Logout </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
  },
  title: {
    fontSize: scale(22),
    color: Colors.primaryColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  btnContainer: {
    width: '80%',
    textAlign: 'center',
    backgroundColor: Colors.primaryColor,
    marginTop: moderateScale(5),
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(30),
    alignSelf: 'center',
  },
  Logout: {
    fontSize: scale(14),
    color: Colors.white,
    textAlign: 'center',
  },
});
