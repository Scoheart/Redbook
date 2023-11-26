import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import iconMainLogo from '../../assets/icon_main_logo.png';
import {Alert} from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
  const [username, setUsername] = useState('shuhao');
  const [password, setPassword] = useState('12345678');

  const navigateToHome = () => {
    navigation.replace('ButtomTab');
  };

  const handleLogin = async () => {
    const res = await fetch('http://192.168.10.10:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const {code, message, data} = await res.json();
    if (code === 200) {
      navigateToHome();
    } else {
      Alert.alert('登陆失败', message);
    }
  };

  const quickLogin = () => {
    const styles = StyleSheet.create({
      container: {
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
      main: {
        gap: 24,
        marginBottom: 100,
        disfplay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        borderRadius: 30,
        width: 200,
      },
    });
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={iconMainLogo}></Image>
        <View style={styles.main}>
          <Button
            buttonStyle={{...styles.button, backgroundColor: 'green'}}
            onPress={handleLogin}>
            WeChat 登陆
          </Button>
          <Button buttonStyle={styles.button}>QQ 登陆</Button>
          <TouchableOpacity
            onPress={() => {
              setLoginType('input');
            }}>
            <Text>其他方式登陆</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>我已经阅读协议，同意登陆</Text>
        </View>
      </View>
    );
  };

  const inputLogin = () => {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 16,
      },
      loginButton: {
        width: 300,
        borderRadius: 30,
        backgroundColor: 'rgba(214, 61, 57, 1)',
      },
    });

    const navigateRegister = () => {
      navigation.navigate('Register');
    };

    return (
      <View style={styles.container}>
        <Input
          placeholder={'请输入用户名'}
          value={username}
          onChangeText={usernameValue => setUsername(usernameValue)}
        />
        <Input
          placeholder={'请输入密码'}
          value={password}
          secureTextEntry={true}
          onChangeText={passwordValue => setPassword(passwordValue)}
        />
        <Button buttonStyle={styles.loginButton} onPress={handleLogin}>
          登陆
        </Button>
        <View
          style={{
            marginTop: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <TouchableOpacity onPress={navigateRegister}>
            <Text>还没有账号？</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>忘记密码</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <>{loginType === 'quick' ? quickLogin() : inputLogin()}</>;
};

export default Login;
