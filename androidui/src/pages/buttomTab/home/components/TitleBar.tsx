import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import iconDaily from '../../../../assets/icon_daily.png';
import iconSearch from '../../../../assets/icon_search.png';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  dailyTouchable: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
    marginRight: 42,
  },
  tabTouchable: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTouchable: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    marginLeft: 42,
  },
  icon: {
    width: 28,
    height: 28,
  },
  tabTxt: {
    fontSize: 16,
    color: '#999',
  },
});

const TitleBar = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.dailyTouchable}>
        <Image style={styles.icon} source={iconDaily} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTouchable}>
        <Text style={styles.tabTxt}>关注</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTouchable}>
        <Text style={styles.tabTxt}>发现</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTouchable}>
        <Text style={styles.tabTxt}>附近</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchTouchable}>
        <Image style={styles.icon} source={iconSearch} />
      </TouchableOpacity>
    </View>
  );
};

export default TitleBar;
