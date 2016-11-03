import React from 'react';
import {View} from 'react-native';

export default function StackMobile(props) {
  const style = [
    {
      flexDisplay: 'column'
    },
    props.style,
  ];
  return (
    <View style={style} {...props}>
      {props.children}
    </View>
  );
}
