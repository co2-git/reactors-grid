import React, {Component} from 'react';
import {StyleSheet, Text} from 'reactors';
import {Row, Stack} from 'reactors-grid';

export default class App extends Component {
  render() {
    return (
      <Stack style={styles.container}>
        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row />'}</Text>

          <Row style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row reverse />'}</Text>

          <Row reverse style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row wrap />'}</Text>

          <Row wrap style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
            <Text style={styles.child}>{'4'}</Text>
            <Text style={styles.child}>{'5'}</Text>
            <Text style={styles.child}>{'6'}</Text>
            <Text style={styles.child}>{'7'}</Text>
            <Text style={styles.child}>{'8'}</Text>
            <Text style={styles.child}>{'9'}</Text>
            <Text style={styles.child}>{'10'}</Text>
            <Text style={styles.child}>{'11'}</Text>
            <Text style={styles.child}>{'12'}</Text>
            <Text style={styles.child}>{'13'}</Text>
            <Text style={styles.child}>{'14'}</Text>
            <Text style={styles.child}>{'15'}</Text>
            <Text style={styles.child}>{'16'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row nowrap />'}</Text>
          <Text style={styles.title}>{'<Row no-wrap />'}</Text>
          <Text style={styles.title}>{'<Row wrap={false} />'}</Text>

          <Row nowrap style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
            <Text style={styles.child}>{'4'}</Text>
            <Text style={styles.child}>{'5'}</Text>
            <Text style={styles.child}>{'6'}</Text>
            <Text style={styles.child}>{'7'}</Text>
            <Text style={styles.child}>{'8'}</Text>
            <Text style={styles.child}>{'9'}</Text>
            <Text style={styles.child}>{'10'}</Text>
            <Text style={styles.child}>{'11'}</Text>
            <Text style={styles.child}>{'12'}</Text>
            <Text style={styles.child}>{'13'}</Text>
            <Text style={styles.child}>{'14'}</Text>
            <Text style={styles.child}>{'15'}</Text>
            <Text style={styles.child}>{'16'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row space-around />'}</Text>

          <Row space-around style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row space-between />'}</Text>

          <Row space-between style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row left />'}</Text>

          <Row left style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row center-x />'}</Text>

          <Row center-x style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row right />'}</Text>

          <Row right style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row up />'}</Text>

          <Row up style={styles.children}>
            <Text style={{...styles.child, height: 80}}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={{...styles.child, height: 30}}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row down />'}</Text>

          <Row down style={styles.children}>
            <Text style={{...styles.child, height: 80}}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={{...styles.child, height: 30}}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Row center-y />'}</Text>

          <Row center-y style={styles.children}>
            <Text style={{...styles.child, height: 80}}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={{...styles.child, height: 30}}>{'3'}</Text>
          </Row>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Stack />'}</Text>

          <Stack
            style={{
              ...styles.children,
              ...styles.childrenStack,
            }}
            >
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Stack>
        </Stack>

        <Stack style={styles.example}>
          <Text style={styles.title}>{'<Stack center />'}</Text>

          <Stack
            center
            style={{
              ...styles.children,
              ...styles.childrenStack,
            }}
            >
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    borderRadius: 8,
    alignItems: 'stretch',
  },
  example: {
    border: '1px solid #999',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    alignItems: 'stretch',
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 22,
  },
  children: {
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  childrenStack: {
    height: 200,
  },
  child: {
    border: '1px solid #ccc',
    padding: 6,
    margin: 4,
    borderRadius: 3,
    backgroundColor: 'white',
    height: 50,
  },
});
