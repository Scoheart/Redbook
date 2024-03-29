import React, {useState} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import iconMainLogo from '../../assets/icon_main_logo.png';
import iconUnselected from '../../assets/icon_unselected.png';
import {Alert} from 'react-native';
import request from '../../request/request';

const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
  const [username, setUsername] = useState('shuhao');
  const [password, setPassword] = useState('12345678');

  const navigateToHome = () => {
    navigation.replace('ButtomTab');
  };

  const handleLogin = async () => {
    const res = await request('/user/login', {
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
        borderRadius: 10,
        width: 200,
        height: 44,
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <TouchableOpacity>
            <Image
              source={iconUnselected}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              color: '#999',
              marginLeft: 6,
            }}>
            我已阅读并同意
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.baidu.com');
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#1020ff',
              }}>
              《用户协议》和《隐私政策》
            </Text>
          </TouchableOpacity>
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
