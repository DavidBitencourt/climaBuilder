import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import api from '../../services/api.js';

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
  }
  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    Geolocation.getCurrentPosition(position => {
      this.setState({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
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
    const {
      country,
      city,
      weather,
      temp,
      pressure,
      humidity,
      min,
      max,
      windSpeed,
      clouds,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.textInfo}>País: {country}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Cidade: {city}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Clima: {weather}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Temperatura: {temp}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Humidade: {humidity}%</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Mínima{min}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Máxima: {max}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Nublado: {clouds}%</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>
              Velocidade do vento: {windSpeed} km
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>Pressão: {pressure}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.getLocation()}>
          <Text style={styles.textButton}>atualizar clima</Text>
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
    backgroundColor: '#FFFFFF',
    paddingTop: 100,
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 20,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textInfo: {
    color: '#fed800',
    fontSize: 15,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 15,
    marginTop: 80,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
});

export default Start;
