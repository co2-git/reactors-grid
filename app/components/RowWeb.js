import React from 'react';

export default function RowWeb(props) {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...props.style,
  };
  return (
    <div style={style}>
      {props.children}
    </div>
  );
}
