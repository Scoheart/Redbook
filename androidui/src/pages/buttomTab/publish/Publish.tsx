import React, {useState} from 'react';
import {View, Platform, Button, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from '@rneui/base';

const MyDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // 在 iOS 上，时间选择器是一个模态框，需要手动关闭
    setDate(currentDate);
    console.log(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Show Date Picker" />
      <Input
        placeholder="请选择日期"
        value={date.toLocaleDateString()}
        onPressIn={() => {
          setShow(true);
        }}></Input>
      {show && (
        <DateTimePicker
          value={date}
          mode="date" // 可以选择 'date', 'time', 或 'datetime'
          display="default" // 可以选择 'default', 'spinner', 'calendar'
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
