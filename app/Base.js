import React, {Component} from 'react';
import Reactors from 'reactors';
import _switch from 'underscore-switch';
import keys from 'lodash/keys';
import omit from 'lodash/omit';

export default class ReactorsGrid extends Component {
  style = {
    flexDirection: this.props.flexDirection || 'row',
  };

  cases = {
    flexAround: () => {
      this.style.justifyContent = 'space-around';
    },
    flexBetween: () => {
      this.style.justifyContent = 'space-between';
    },
    flexCenter: () => {
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
    },
    flexCenterHorizontal: () => {
      const prop = _switch(
        this.props.flexDirection,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'center';
    },
    flexCenterVertical: () => {
      const prop = _switch(
        this.props.flexDirection,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'center';
    },
    flexDown: () => {
      const prop = _switch(
        this.props.flexDirection,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'flex-end';
    },
    flexGrow: () => {
      this.style.flexGrow = typeof this.props.flexGrow === 'number' ?
        this.props.flexGrow : 2;
      if (Reactors.isMobile()) {
        this.style.flex = typeof this.props.flexGrow === 'number' ?
          this.props.flexGrow : 1;
      }
    },
    flexLeft: () => {
      const prop = _switch(
        this.props.flexDirection,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'flex-start';
    },
    flexReverse: () => {
      switch (this.style.flexDirection) {
      case 'row':
        this.style.flexDirection = 'row-reverse';
        break;
      case 'column':
        this.style.flexDirection = 'column-reverse';
        break;
      case 'row-reverse':
        this.style.flexDirection = 'row';
        break;
      case 'column-reverse':
        this.style.flexDirection = 'column-reverse';
        break;
      }
    },
    flexRight: () => {
      const prop = _switch(
        this.props.flexDirection,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'flex-end';
    },
    flexStretch: () => {
      this.style.alignItems = 'stretch';
    },
    flexUp: () => {
      const prop = _switch(
        this.props.flexDirection,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'flex-start';
    },
    flexWrap: () => {
      this.style.flexWrap = this.props.wrap === false ? 'nowrap' : 'wrap';
      this.style.alignContent = _switch(this.props.wrap, {
        around: 'space-around',
        between: 'space-between',
        center: 'center',
        down: 'flex-end',
        stretch: 'stretch',
        up: 'flex-start',
      });
    },
  };

  render() {
    for (const prop in this.cases) {
      if ((prop in this.props)) {
        this.cases[prop]();
      }
    }

    const reactorsProps = omit(
      Reactors.props(this.props),
      [
        ...keys(this.cases),
        'flexDirection',
      ],
    );

    if (Reactors.isMobile()) {
      const ReactorsGridMobile = require('./Mobile').default;
      return (
        <ReactorsGridMobile
          {...reactorsProps}
          __ReactorsGridStyle={this.style}
          />
      );
    }
    if (Reactors.isDOM()) {
      const ReactorsGridDOM = require('./DOM').default;
      return (
        <ReactorsGridDOM
          {...reactorsProps}
          __ReactorsGridStyle={this.style}
          />
      );
    }
    throw new Error(`Unsupported platform: ${Reactors.platform}`);
  }
}
