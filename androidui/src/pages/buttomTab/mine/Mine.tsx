import React, { useEffect } from 'react';
import {Avatar, Text} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';

const Mine = () => {
  
  const fechData = async () => {
    const response = await fetch(`http://192.168.10.10:3000/user`)
  }

  useEffect(() => {
    
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
          }}
        />
        <View style={{gap: 4}}>
          <Text h3>Scoheart</Text>
          <Text>小红书号: Scoheart</Text>
        </View>
      </View>
      <View style={styles.blank}></View>
      <View style={styles.bottomView}>
        <View
          style={{
            height: 48,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 56,
            backgroundColor: '#111111',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={styles.text}>笔记</Text>
          <Text style={styles.text}>收藏</Text>
          <Text style={styles.text}>看过</Text>
        </View>
        <View>
          <Text>笔记</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    height: 50, // 设置你想要的高度
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginHorizontal: 16,
  },
  blank: {
    height: 280,
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#000000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: '#ffffff',
  },
});

export default Mine;
