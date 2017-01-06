'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactorsGrid = require('reactors-grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  render() {
    return _react2.default.createElement(
      _reactorsGrid.Stack,
      { style: styles.container },
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Row />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Row,
          { style: styles.children },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      ),
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Row space-between />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Row,
          { 'space-between': true, style: styles.children },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      ),
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Row space-around />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Row,
          { 'space-around': true, style: styles.children },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      ),
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Row center />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Row,
          { center: true, style: styles.children },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      ),
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Stack />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Stack,
          {
            style: _extends({}, styles.children, styles.childrenStack)
          },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      ),
      _react2.default.createElement(
        _reactorsGrid.Stack,
        { style: styles.example },
        _react2.default.createElement(
          _reactors.Text,
          { style: styles.title },
          '<Stack center />'
        ),
        _react2.default.createElement(
          _reactorsGrid.Stack,
          {
            center: true,
            style: _extends({}, styles.children, styles.childrenStack)
          },
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '1'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '2'
          ),
          _react2.default.createElement(
            _reactors.Text,
            { style: styles.child },
            '3'
          )
        )
      )
    );
  }
}

exports.default = App;
const styles = _reactors.StyleSheet.create({
  container: {
    backgroundColor: '#999',
    borderRadius: 8,
    alignItems: 'stretch'
  },
  example: {
    border: '1px solid #999',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    alignItems: 'stretch'
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 22
  },
  children: {
    backgroundColor: '#ccc',
    borderRadius: 4
  },
  childrenStack: {
    height: 200
  },
  child: {
    border: '1px solid #ccc',
    padding: 6,
    margin: 4,
    borderRadius: 3,
    backgroundColor: 'white'
  }
});