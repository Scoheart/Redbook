import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: any) => {
  try {
    await AsyncStorage.setItem('token', value);
    return true;
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export {storeData, getData};
