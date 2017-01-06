import React from 'react';

export default function RowWeb(props) {
  let justifyContent = 'space-between';
  let alignItems = 'center';

  if (props.center) {
    justifyContent = 'center';
    alignItems = 'center';
  }

  if (props['space-between']) {
    justifyContent = 'space-between';
  }

  if (props['space-around']) {
    justifyContent = 'space-around';
  }

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent,
    alignItems,
    ...props.style,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}
