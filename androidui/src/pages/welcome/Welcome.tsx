import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import iconMainLogo from '../../assets/icon_main_logo.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, []);

  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={iconMainLogo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 105,
    marginBottom: 200,
    resizeMode: 'contain',
  },
});

export default Welcome;
