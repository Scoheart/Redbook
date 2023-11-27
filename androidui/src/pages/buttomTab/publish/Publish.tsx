import React, {useState} from 'react';
import {View, Platform, Button, TextInput} from 'react-native';
import {Input} from '@rneui/base';

const MyDatePicker = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  return (
    <View>
      <Input
        placeholder="title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <Input placeholder="content" />
      <Input placeholder="image url" />
      <Input placeholder="createAt" />
    </View>
  );
};

export default MyDatePicker;

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Text} from '@rneui/base';

// const Drawer = createDrawerNavigator();

// const jsx = function () {
//   return <Text>sdfds</Text>;
// };

// export default function Publish() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={jsx} />
//       <Drawer.Screen name="Article" component={jsx} />
//     </Drawer.Navigator>
//   );
// }
