import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import api from '../../services/api.js';
import Button from '../components/Button';
import ListWeather from '../components/ListWeather';
class Start extends Component {
  constructor(props) {
    super(props);
    const lon = this.props.navigation.getParam('lon');
    const lat = this.props.navigation.getParam('lat');

    this.state = {
      lon: lon,
      lat: lat,
      country: '',
      city: '',
      weather: '',
      temp: '',
      pressure: '',
      humidity: '',
      min: '',
      max: '',
      windSpeed: '',
      clouds: '',
    };

    this.getLocation();
  }

  getLocation() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      () => {
        Alert.alert('No momento não foi possível atualizar a sua posiçã0.');
      },
      {timeout: 3000, enableHighAccuracy: true, maximumAge: 3000},
    );

    api
      .get(
        'weather?lat=' +
          this.state.lat +
          '&lon=' +
          this.state.lon +
          '&lang=pt&APPID=68b87b06d4f8dcaf1baef1cb8b1ab2fe',
      )
      .then(response => {
        this.setState({
          country: response.data.sys.country,
          city: response.data.name,
          weather: response.data.weather[0].description,
          temp: response.data.main.temp,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          min: response.data.main.temp_min,
          max: response.data.main.temp_max,
          windSpeed: response.data.wind.speed,
          clouds: response.data.clouds.all,
        });
      })
      .catch(err => {
        Alert.alert('Ocorreu um erro inesperado, tente novamente mais tarde.');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Dados climáticos</Text>
        <View style={styles.infoContainer}>
          <ListWeather data={this.state} />
        </View>
        <Button handler={() => this.getLocation()} text={'atualizar clima'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  textTitle: {
    color: '#222',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Start;
