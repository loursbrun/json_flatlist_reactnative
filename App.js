import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

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
              <View id="thumbnail" style={{ height: 200, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', flex: 1 }}></Image>
              </View>
              <Text id="adress" style={{ height: 60, backgroundColor: 'lightskyblue', flex: 1 }}>{item.adress}</Text>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity id="share" style={{ height: 50, backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/gray/sharethis-xxl.png' }} style={{ width: 26, height: 26, tintColor: 'grey', }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="compare" style={{ height: 50, backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/12/100112_compare_512x512.png' }} style={{ width: 30, height: 30, tintColor: 'grey' }}></Image>
                </TouchableOpacity>
                <View id="space" style={{ height: 50, backgroundColor: 'grey', flex: 2 }}></View>
                <TouchableOpacity id="like" style={{ height: 50, backgroundColor: 'aquamarine', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-heart-like-favourite-favorite-outline-stroke-512.png' }} style={{ width: 30, height: 30, tintColor: 'red' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: 'red', flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>
                  <Text>Premium</Text>
                </TouchableOpacity>
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
    backgroundColor: '#eaeaea',
    paddingTop: 100
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
