import React, {Component} from 'react';
import Reactors from 'reactors';
import _switch from 'underscore-switch';
import keys from 'lodash/keys';
import omit from 'lodash/omit';

export default class ReactorsGrid extends Component {
  style = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    flex: 0,
    flexDirection: this.props.direction || 'row',
    flexGrow: 1,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  };

  cases = {
    around: () => {
      this.style.justifyContent = 'space-around';
    },
    between: () => {
      this.style.justifyContent = 'space-between';
    },
    center: () => {
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
    },
    centerHorizontal: () => {
      const prop = _switch(
        this.props.direction,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'center';
    },
    centerVertical: () => {
      const prop = _switch(
        this.props.direction,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'center';
    },
    down: () => {
      const prop = _switch(
        this.props.direction,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'flex-end';
    },
    grow: () => {
      this.style.flexGrow = typeof this.props.flexGrow === 'number' ?
        this.props.flexGrow : 2;
      if (Reactors.isMobile()) {
        this.style.flex = typeof this.props.flexGrow === 'number' ?
          this.props.flexGrow : 1;
      }
    },
    left: () => {
      const prop = _switch(
        this.props.direction,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'flex-start';
    },
    reverse: () => {
      this.style.flexDirection = 'column-reverse';
    },
    right: () => {
      const prop = _switch(
        this.props.direction,
        {row: 'justifyContent', column: 'alignItems'},
      );
      this.style[prop] = 'flex-end';
    },
    stretch: () => {
      this.style.alignItems = 'stretch';
    },
    up: () => {
      const prop = _switch(
        this.props.direction,
        {column: 'justifyContent', row: 'alignItems'},
      );
      this.style[prop] = 'flex-start';
    },
    wrap: () => {
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
      keys(this.cases),
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
