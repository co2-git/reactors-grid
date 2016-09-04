import React from 'react';
import {View} from 'react-native';

export default function RowMobile(props) {
  const style = [
    {
      flexDisplay: 'row'
    },
    props.style,
  ];
  return (
    <View style={style} {...props}>
      {props.children}
    </View>
  );
}
