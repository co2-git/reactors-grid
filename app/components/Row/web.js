import React from 'react';

export default function RowWeb(props) {
  const style = {
    display: 'flex',
    ...props.style,
  };
  style.justifyContent = 'space-between';
  return (
    <div style={style} {...props}>
      {props.children}
    </div>
  );
}
