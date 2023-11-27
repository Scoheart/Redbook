import {Avatar, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import iconSearch from '../../../assets/icon_search.png';
import iconShopCar from '../../../assets/icon_shop_car.png';
import iconOrders from '../../../assets/icon_orders.png';
import iconMenuMore from '../../../assets/icon_menu_more.png';
import iconTabShopNormal from '../../../assets/icon_tab_shop_normal.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import heartEmpty from '../../../assets/icon_heart_empty.png';
import request from '../../../request/request';
import ResizeImage from '../home/components/ResizeImage';
import FlowList from '../../../components/flowlist/FlowList';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  iconContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  menuIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 6,
  },
  item: {
    width: (SCREEN_WIDTH - 18) >> 1,
    backgroundColor: 'white',
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 4,
    overflow: 'hidden',
  },
  flatList: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
  },
});

const Shop: React.FC = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search: any) => {
    setSearch(search);
  };

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
        <View style={styles.item}>
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
    <View style={styles.container}>
      <SearchBar
        placeholder="搜索"
        onChangeText={updateSearch}
        value={search}
        style={{
          height: 36,
          backgroundColor: 'white',
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderColor: '#eee',
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
        }}
      />
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Image style={styles.menuIcon} source={iconOrders} />
          <Text>我的订单</Text>
        </View>
        <View style={styles.icon}>
          <Image style={styles.menuIcon} source={iconShopCar} />
          <Text>购物车</Text>
        </View>
        <View style={styles.icon}>
          <Image style={styles.menuIcon} source={iconTabShopNormal} />
          <Text>关注店铺</Text>
        </View>
        <View style={styles.icon}>
          <Image style={styles.menuIcon} source={iconMenuMore} />
          <Text>更多</Text>
        </View>
      </View>
      <FlowList
        data={homeList}
        style={styles.flatList}
        numColumns={2}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

export default Shop;
