import {Text, Image, ListItem, Avatar} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import iconStar from '../../../assets/icon_star.png';
import iconComments from '../../../assets/icon_comments.png';
import iconNewFollow from '../../../assets/icon_new_follow.png';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  topIcon: {
    marginTop: 32,
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 56,
  },
  iconStar: {
    width: 56,
    height: 56,
  },
  gap: {
    marginTop: 12,
  },
  list: {
    marginTop: 8,
  },
});

const Message: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>消息</Text>
      </View>
      <View style={styles.topIcon}>
        <TouchableOpacity>
          <View>
            <Image source={iconStar} style={styles.iconStar} />
            <Text style={styles.gap}>新增收藏</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Image source={iconNewFollow} style={styles.iconStar} />
            <Text style={styles.gap}>新增关注</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Image source={iconComments} style={styles.iconStar} />
            <Text style={styles.gap}>评论和@</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
          return (
            <ListItem bottomDivider>
              <Avatar
                rounded
                source={{uri: 'http://172.21.246.114:3000/public/user/avatar/avatar_03.png'}}
              />
              <ListItem.Content>
                <ListItem.Title>小明同学</ListItem.Title>
                <ListItem.Subtitle>[笔记]西二旗元中心｜单间独立卫浴,快手百度实习……</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Message;
