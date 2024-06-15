import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImagesPath from '../utlis/ImagesPath';
import {moderateScale, scale} from 'react-native-size-matters';
import {Colors} from '../utlis/Colors';
import VectorIcons from '../utlis/VectorIcons';

const PostFoother = ({data}) => {
  return (
    <View style={styles.footerIconContainer}>
      <View style={styles.footerDir}>
        <View style={styles.footerIcon}>
          <Image source={ImagesPath.like} style={styles.like} />
          <Image source={ImagesPath.shock} style={styles.like} />
          <Image source={ImagesPath.heart} style={styles.like} />
          <Text style={styles.count}>{data.reactionsCount}</Text>
        </View>
        <Text>{data.commonts}{data.comments} Comments</Text>
      </View>

      <View style={styles.userActionSec}>
        <View style={styles.footerDir}>
          <VectorIcons
            name="like2"
            type="AntDesign"
            size={25}
            color={Colors.grey}
          />
          <Text style={styles.count}>Like</Text>
        </View>
        <View style={styles.footerDir}>
          <VectorIcons
            name="chatbox-outline"
            type="Ionicons"
            size={25}
            color={Colors.grey}
          />
          <Text style={styles.count}> Comments</Text>
        </View>
        <View style={styles.footerDir}>
          <VectorIcons
            name="arrow-redo-outline"
            type="Ionicons"
            size={25}
            color={Colors.grey}
          />
          <Text style={styles.count}>{data.reaction} Share</Text>
        </View>
      </View>
    </View>
  );
};

export default PostFoother;

const styles = StyleSheet.create({
  footerIconContainer: {
    padding: moderateScale(14),
  },
  footerIcon: {
    flexDirection: 'row',
  },
  like: {
    height: scale(20),
    width: scale(20),
  },
  count: {
    color: Colors.grey,
    fontSize: scale(14),
    paddingLeft: moderateScale(5),
  },
  footerDir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    paddingBottom: moderateScale(15),
  },
  userActionSec: {
    marginVertical: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    alignItems:'center',
  },
  
});
