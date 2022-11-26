import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../style/style.js';



export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.author}>Author: Aleksi Nokela</Text>
      </View>
    )
  }
}
