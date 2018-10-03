import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://www.mocky.io/v2/5bb481953300006630cad649')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.adresses,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>

            <View>
              <View id="thumbnail" style={{ width: 350, height: 180, backgroundColor: 'pink' }}></View>
              <Text id="adress" style={{ width: 350, height: 60, backgroundColor: 'lightskyblue' }}>{item.adress}</Text>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity id="share" style={{ width: 50, height: 50, backgroundColor: 'green' }}></TouchableOpacity>
                <TouchableOpacity id="compare" style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></TouchableOpacity>
                <View id="space" style={{ width: 90, height: 50, backgroundColor: 'grey' }}></View>
                <TouchableOpacity id="like" style={{ width: 50, height: 50, backgroundColor: 'aquamarine' }}></TouchableOpacity>
                <TouchableOpacity id="premium" style={{ width: 120, height: 50, backgroundColor: 'red' }}></TouchableOpacity>
              </View>
            </View>


          }
          keyExtractor={({ id }, index) => id}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
