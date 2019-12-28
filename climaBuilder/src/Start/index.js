import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: '',
      lat: '',
    };
  }
  componentWillMount() {
    Geolocation.getCurrentPosition(position => {
      this.setState({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }
  consultClimate() {
    this.props.navigation.navigate('ConsultClimate', this.state);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require('../../img/sunny.png')}
            style={{width: 80, height: 80}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textOrange}>Clima </Text>
          <Text style={styles.textBlack}>Builder</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.consultClimate()}>
          <Text style={styles.textButton}>consultar o clima</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  img: {
    alignSelf: 'flex-end',
    padding: 30,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOrange: {
    color: '#fed800',
    fontSize: 45,
    fontWeight: 'bold',
  },
  textBlack: {
    color: '#222',
    fontSize: 45,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 8,
    marginTop: 25,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default Start;
