// Import necessary components from React Native and React Native Elements
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, Platform, Keyboard} from 'react-native';
import {Input, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const RegistrationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate || birthday;
    setShow(Platform.OS === 'ios'); // 在 iOS 上，时间选择器是一个模态框，需要手动关闭
    setBirthday(currentDate);
  };

  const handleRegistration = async () => {
    const res = await fetch('http://192.168.10.10:3000/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname,
        gender,
        birthday: birthday.toLocaleDateString(),
        username,
        password,
      }),
    });
    const {code, message, data} = await res.json();
    if (code === 200) {
      navigation.navigate('Login');
    } else {
      Alert.alert('注册失败', message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>注册</Text>
      <Input
        placeholder="昵称"
        onChangeText={text => setNickname(text)}
        value={nickname}
      />
      <Input
        placeholder="用户名"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <Input
        placeholder="密码"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <RNPickerSelect
        placeholder={{label: '性别', value: null}}
        onValueChange={gender => setGender(gender)}
        items={[
          {label: '男', value: 'male'},
          {label: '女', value: 'famale'},
          {label: '不想透露', value: 'null'},
        ]}
      />
      <Input
        placeholder="生日"
        value={birthday.toLocaleDateString()}
        onPressIn={() => {
          setShow(true);
        }}></Input>
      {show && (
        <RNDateTimePicker
          value={birthday}
          mode="date" // 可以选择 'date', 'time', 或 'datetime'
          display="default" // 可以选择 'default', 'spinner', 'calendar'
          onChange={onChange}
        />
      )}
      <Button
        title="注册"
        buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)'}}
        onPress={handleRegistration}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    borderRadius: 30,
  },
});

export default RegistrationScreen;
