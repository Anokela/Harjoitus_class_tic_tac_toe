import Header from './Components/Header';
import Footer from './Components/Footer';
import Gameboard from './Components/Gameboard';
import { View } from 'react-native';
import React from 'react';
import styles from './style/style';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Gameboard />
        <Footer />
      </View>
    )
  }
}