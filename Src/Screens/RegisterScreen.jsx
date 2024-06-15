import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import VectorIcons from '../utlis/VectorIcons';
import {Colors} from '../utlis/Colors';
import ImagesPath from '../utlis/ImagesPath';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');

  const onCreateAccount = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <VectorIcons
        name="arrow-back"
        type="Ionicons"
        color={Colors.black}
        size={20}
        onPress={()=>navigation.goBack()}
      />

      <View style={styles.subContainer}>
        <Image source={ImagesPath.logo} style={styles.logoStyle} />
        <TextInput
          placeholder="Full Name"
          value={fullname}
          onChangeText={value => setFullName(value)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Mobile number or email"
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confpassword}
          onChangeText={value => setConfPassword(value)}
          style={styles.inputStyle}
        />
        <TouchableOpacity style={styles.loginBtnStyle}>
          <Text style={styles.loginText}>Create Acount</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
          <Text style={styles.newAccountText}>Already have an account : </Text>
        </TouchableOpacity>
        <Image source={ImagesPath.metalogo} style={styles.metalogo} />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
  },
  logoStyle: {
    width: scale(50),
    height: verticalScale(50),
    marginVertical: moderateScale(60),
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    width: '95%',
    marginTop: moderateScale(12),
  },
  loginBtnStyle: {
    backgroundColor: Colors.primaryColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    width: '95%',
    alignItems: 'center',
    marginTop: moderateVerticalScale(24),
  },
  loginText: {
    color: Colors.white,
    fontSize: scale(15),
    fontWeight: '500',
  },
  ForgotText: {
    color: Colors.grey,
    fontSize: scale(14),
    marginTop: moderateVerticalScale(12),
  },
  newAccount: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(18),
    width: '95%',
    alignItems: 'center',
    marginTop: moderateScale(75),
  },
  newAccountText: {
    color: Colors.primaryColor,
    fontWeight: '400',
    fontSize: scale(14),
  },
  metalogo: {
    height: moderateScale(15),
    width: scale(70),
    marginTop: moderateVerticalScale(15),
  },
});
