import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Button extends Component {
  render() {
    const height = this.props;
    return (
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.handler()}>
          <Text style={styles.textButton}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#fed800',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
  },
  textButton: {
    color: '#222',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default Button;
