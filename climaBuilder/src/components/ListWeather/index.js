import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
class ListWeather extends Component {
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
    } = this.props.data;
    return (
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Localização: </Text>
          <Text style={styles.textOrange}>
            {country}, {city}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Clima: </Text>
          <Text style={styles.textOrange}>{weather}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Temperatura: </Text>
          <Text style={styles.textOrange}>{parseInt(temp - 273.15)}°C</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Mínima: </Text>
          <Text style={styles.textOrange}>{parseInt(min - 273.15)}°C</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Máxima: </Text>
          <Text style={styles.textOrange}>{parseInt(max - 273.15)}°C</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Humidade: </Text>
          <Text style={styles.textOrange}>{humidity}%</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Nublado: </Text>
          <Text style={styles.textOrange}>{clouds}%</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Velocidade do vento: </Text>
          <Text style={styles.textOrange}>{windSpeed} km</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textBlack}>Pressão: </Text>
          <Text style={styles.textOrange}>{pressure} hPa</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoContainer: {
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 15,
  },
  textOrange: {
    color: '#fed800',
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  textBlack: {
    color: '#222',
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
});

export default ListWeather;
