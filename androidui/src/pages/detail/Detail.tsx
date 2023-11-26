import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import iconArrow from '../../assets/icon_arrow.png';
import iconShare from '../../assets/icon_share.png';
import iconCollection from '../../assets/icon_collection.png';
import iconComment from '../../assets/icon_comment.png';
import iconHeartEmpty from '../../assets/icon_heart_empty.png';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Avatar, Button, Text} from '@rneui/base';
import {Input} from '@rneui/themed';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
});

const Detail: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [article, setArticle] = useState();
  const {key, name, params, path} = useRoute();
  const {id} = params;
  const fetchData = async () => {
    const response = await fetch(`http://192.168.10.10:3000/article/${id}`);
    const data = await response.json();

    setArticle(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [article]);

  const renderTop = () => {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      },
      left: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
      },
      iconArrow: {
        width: 32,
        height: 32,
      },
      right: {
        width: '50%',
        flexDirection: 'row-reverse',
        gap: 16,
      },
      iconShare: {
        width: 32,
        height: 32,
      },
      followButton: {
        verticalAlign: 'center',
        width: 68,
        height: 32,
        borderRadius: 20,
        backgroundColor: 'red',
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={iconArrow} style={styles.iconArrow}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar
              size={40}
              title="rd"
              rounded
              containerStyle={{backgroundColor: 'red'}}
            />
          </TouchableOpacity>
          <Text>小小爱睡觉</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity>
            <Image source={iconShare} style={styles.iconShare} />
          </TouchableOpacity>
          <Button
            buttonStyle={styles.followButton}
            titleStyle={{fontSize: 10}}
            title="关注"
          />
        </View>
      </View>
    );
  };

  const renderImage = () => {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: 400,
      },
    });
    return (
      <View style={styles.container}>
        {article && (
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
            source={{uri: article.image}}
          />
        )}
      </View>
    );
  };

  const renderContent = () => {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      title: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
      },
      content: {
        fontSize: 15,
        color: '#333',
        marginTop: 6,
      },
    });

    return (
      <View style={styles.container}>
        {article && <Text style={styles.title}>{article.title}</Text>}
        {article && <Text style={styles.content}>{article.content}</Text>}
      </View>
    );
  };

  const renderBottom = () => {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: 64,
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
      inputLayout: {
        width: '40%',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginRight: 12,
      },
      input: {
        height: '100%',
        fontSize: 16,
        color: '#333',
        textAlignVertical: 'center',
        paddingVertical: 0,
      },
      right: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        gap: 16,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      heart: {
        width: 32,
        height: 32,
      },
      collection: {
        width: 32,
        height: 32,
      },
      comment: {
        width: 32,
        height: 32,
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.inputLayout}>
          <TextInput
            style={styles.input}
            placeholder="说点什么"
            placeholderTextColor={'#333'}
          />
        </View>
        <View style={styles.right}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image source={iconHeartEmpty} style={styles.heart} />
              <Text>123</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image source={iconCollection} style={styles.collection} />
              <Text>123</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image source={iconComment} style={styles.comment} />
              <Text>123</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {renderTop()}
      <ScrollView>
        {renderImage()}
        {renderContent()}
      </ScrollView>
      {renderBottom()}
    </>

    // <View style={styles.container}>
    //   {article && (
    //     <Image source={{uri: article.image}} style={styles.image}></Image>
    //   )}
    //   <View
    //     style={{
    //       height: '100%',
    //       display: 'flex',
    //       marginTop: 10,
    //       paddingHorizontal: 16,
    //     }}>
    //     <Button
    //       title="Back"
    //       onPress={() => {
    //         console.log(article);
    //       }}></Button>
    //   </View>
    // </View>
  );
};

export default Detail;
