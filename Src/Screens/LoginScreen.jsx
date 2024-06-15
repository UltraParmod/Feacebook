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


// width: scale(30),
// height: verticalScale(50),
// padding: moderateScale(5)

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateAccount=() => {
    navigation.navigate("RegisterScreen")
  }
  const onLogin=() => {
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <VectorIcons
        name="arrow-back"
        type="Ionicons"
        color={Colors.black}
        size={20}
      />

      <View style={styles.subContainer}>
        <Image source={ImagesPath.logo} style={styles.logoStyle} />
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
        <TouchableOpacity style={styles.loginBtnStyle}>
          <Text style={styles.loginText} onPress={onLogin}>Login In</Text>
        </TouchableOpacity>
        <Text style={styles.ForgotText}>Forgot Password?</Text>
        <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
          <Text style={styles.newAccountText}>Create new account </Text>
        </TouchableOpacity>
        <Image source={ImagesPath.metalogo} style={styles.metalogo} />
      </View>
    </View>
  );
};

export default LoginScreen;

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
