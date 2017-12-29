import React, {PureComponent} from 'react';
import Reactors, {View} from 'reactors';
import omit from 'lodash/omit';

const transformProps = (props, direction) => {
  const startStyle = Reactors.props(props.style);
  const style = [startStyle];
  const blackList = [];
  for (const key in props) {
    switch (key) {
    case 'flex':
      if (Reactors.isDOM() && typeof flex === 'number') {
        style.push({flexGrow: props.flex});
      } else {
        style.push({flex: props.flex});
      }
      blackList.push('flex');
      break;
    case 'flexAround':
      style.push({justifyContent: 'space-around'});
      blackList.push('flexAround');
      break;
    case 'flexBetween':
      style.push({justifyContent: 'space-between'});
      blackList.push('flexBetween');
      break;
    case 'flexCenter':
      style.push({justifyContent: 'center', alignItems: 'center'});
      blackList.push('flexCenter');
      break;
    case 'flexCenterHorizontal':
      if (direction === 'column') {
        style.push({alignItems: 'center'});
      } else {
        style.push({justifyContent: 'center'});
      }
      blackList.push('flexCenterHorizontal');
      break;
    case 'flexCenterVertical':
      if (direction === 'column') {
        style.push({justifyContent: 'center'});
      } else {
        style.push({alignItems: 'center'});
      }
      blackList.push('flexCenterVertical');
      break;
    case 'flexDown':
      if (direction === 'column') {
        style.push({justifyContent: 'flex-end'});
      } else {
        style.push({alignItems: 'flex-end'});
      }
      blackList.push('flexDown');
      break;
    case 'flexGrow':
      style.push({flexGrow: props.flexGrow === true ? 2 : props.flexGrow});
      blackList.push('flexGrow');
      break;
    case 'flexLeft':
      if (direction === 'column') {
        style.push({alignItems: 'flex-start'});
      } else {
        style.push({justifyContent: 'flex-start'});
      }
      blackList.push('flexLeft');
      break;
    case 'flexReverse':
      switch (props.flexReverse) {
      case 'row':
        style.push({flexDirection: 'row-reverse'});
        break;
      case 'column':
        style.push({flexDirection: 'column-reverse'});
        break;
      }
      blackList.push('flexReverse');
      break;
    case 'flexRight':
      if (direction === 'column') {
        style.push({alignItems: 'flex-end'});
      } else {
        style.push({justifyContent: 'flex-end'});
      }
      blackList.push('flexRight');
      break;
    case 'flexStretch':
      style.push({alignItems: 'stretch'});
      blackList.push('flexStretch');
      break;
    case 'flexUp':
      if (direction === 'column') {
        style.push({justifyContent: 'flex-start'});
      } else {
        style.push({alignItems: 'flex-start'});
      }
      blackList.push('flexUp');
      break;
    case 'flexWrap':
      switch (props.flexWrap) {
      case true:
        style.push({flexWrap: 'wrap'});
        break;
      case false:
        style.push({flexWrap: 'nowrap'});
        break;
      case 'around':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'space-aroubd'});
        break;
      case 'between':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'space-between'});
        break;
      case 'center':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'center'});
        break;
      case 'down':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'flex-end'});
        break;
      case 'stretch':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'stretch'});
        break;
      case 'up':
        style.push({flexWrap: 'wrap'});
        style.push({alignContent: 'flex-start'});
        break;
      }
      blackList.push('flexWrap');
      break;
    }
  }
  return Reactors.props({
    ...omit(props, blackList),
    style,
  });
};

class ReactorsFlexRow extends PureComponent {
  render = () => <View {...transformProps(this.props, 'row')} />;
}

class ReactorsFlexStack extends PureComponent {
  render = () => <View {...transformProps(this.props, 'column')} />;
}

export {ReactorsFlexRow as Row};
export {ReactorsFlexStack as Stack};
