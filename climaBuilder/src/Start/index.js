import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: '',
      lat: '',
    };

    this.getPosition();
  }

  getPosition() {
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
        <Button
          handler={() => this.consultClimate()}
          text={'consultar clima'}
        />
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
    padding: 30,
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
});

export default Start;
