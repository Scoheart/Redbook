import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import iconTabPublish from '../../assets/icon_tab_publish.png';
import Home from './home/Home';
import Shop from './shop/Shop';
import Message from './message/Message';
import Mine from './mine/Mine';
import Publish from './publish/Publish';
const {Navigator, Screen} = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarContainer: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabItem: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabPublish: {
    width: 58,
    height: 42,
    resizeMode: 'contain',
  },
});

const ButtomTab: React.FC = () => {

  const TabBar = ({state, descriptors, navigation}: any) => {
    const {routes, index} = state;
    return (
      <View style={styles.tabBarContainer}>
        {routes.map((route: any, i: number) => {
          const {options} = descriptors[route.key];
          const isFocused = index === i;
          if (i === 2) {
            return (
              <TouchableOpacity
                key={i}
                style={styles.tabItem}
                onPress={() => navigation.navigate("Publish")}>
                <Image
                  source={iconTabPublish}
                  style={styles.iconTabPublish}></Image>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => {
                navigation.navigate(route.name);
              }}>
              <Text
                style={{
                  fontSize: isFocused ? 18 : 16,
                  color: isFocused ? '#333' : '#999',
                  fontWeight: isFocused ? 'bold' : 'normal',
                }}>
                {options.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Navigator tabBar={props => <TabBar {...props} />}>
      <Screen
        name="Home"
        component={Home}
        options={{title: '首页', headerShown: false}}
      />
      <Screen
        name="Shop"
        component={Shop}
        options={{title: '购物', headerShown: false}}
      />
      <Screen
        name="Publish"
        component={Publish}
        options={{headerShown: false}}
      />
      <Screen
        name="Message"
        component={Message}
        options={{title: '消息', headerShown: false}}
      />
      <Screen
        name="Mine"
        component={Mine}
        options={{title: '我', headerShown: false}}
      />
    </Navigator>
  );
};

export default ButtomTab;
