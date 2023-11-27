import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TitleBar from './components/TitleBar';
import {Avatar} from '@rneui/base';

import heartEmpty from '../../../assets/icon_heart_empty.png';
import request from '../../../request/request';
import ResizeImage from './components/ResizeImage';
import FlowList from '../../../components/flowlist/FlowList';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const style = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  flatList: {
    paddingTop: 8,
    width: '100%',
    height: '100%',
  },
  item: {
    width: (SCREEN_WIDTH - 18) >> 1,
    backgroundColor: 'white',
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 4,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
});

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [homeList, setHomeList] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    console.log(page);
    try {
      const response = await request(
        `/article/page?page=${page}&pageSize=${pageSize}`,
        null,
      );
      const data = await response.json();
      setHomeList((prevData: any) =>
        page === 1 ? data : [...prevData, ...data],
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setRefreshing(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleRefresh = () => {
    setPage(1);
    setRefreshing(true);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.navigate('Detail', {
            id: item.id,
          });
        }}>
        <View style={style.item}>
          <ResizeImage uri={item.image} />
          <Text
            style={{
              marginHorizontal: 12,
              marginVertical: 4,
            }}>
            {item.title}
          </Text>
          <View
            style={{
              marginHorizontal: 12,
              marginVertical: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                gap: 4,
                flexDirection: 'row',
              }}>
              <Avatar
                size={20}
                rounded
                source={{
                  uri: 'http://172.21.246.114:3000/public/user/avatar/avatar_03.png',
                }}
                containerStyle={{backgroundColor: 'pink'}}
              />
              <Text>momo</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={heartEmpty}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.root}>
      <TitleBar />
      <FlowList
        data={homeList}
        style={style.flatList}
        numColumns={2}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        // onEndReachedThreshold={0.2}
      />
    </View>
  );
};

export default Home;
