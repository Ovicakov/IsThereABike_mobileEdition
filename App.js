import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const App = () => {
  const [bikesAvailable, setBikesAvailable] = useState()
  const [bikeStation, setBikeStation] = useState()

  useEffect(() => {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=madagascar&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Madagascar+-+Meuniers')
      .then(response => setBikesAvailable(response.data.records[0].fields.numbikesavailable))
      .catch(err => console.log(err))

    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=madagascar&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Madagascar+-+Meuniers')
      .then(response => setBikeStation(response.data.records[0].fields.name))
      .catch(err => console.log(err))
  })
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bike.jpg')} style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Station {bikeStation}</Text>
          <Text style={styles.text}>{bikesAvailable} disponibles</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 700,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 10,
  }
});

export default App
