import { View, Text } from 'react-native';
import React, {Component} from 'react';
import styles from '../style/style.js';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
    )
  }
}