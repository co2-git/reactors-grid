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
          <Text style={styles.title}>{'<Row space-between />'}</Text>

          <Row space-between style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
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
          <Text style={styles.title}>{'<Row center />'}</Text>

          <Row center style={styles.children}>
            <Text style={styles.child}>{'1'}</Text>
            <Text style={styles.child}>{'2'}</Text>
            <Text style={styles.child}>{'3'}</Text>
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
  },
});
