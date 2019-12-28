import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import api from '../services/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {listItems: []};
  }

  componentWillMount() {
    console.log(api);
    api
      .get('forecast?id=3448439&APPID=68b87b06d4f8dcaf1baef1cb8b1ab2fe')
      .then(response => {
        console.log(response, 'response');
      })
      .catch(err => {
        console.log(err, 'errorrr');
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textOrange}>Clima </Text>
          <Text style={styles.textBlack}>Builder</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  textOrange: {
    color: '#fed800',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBlack: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
