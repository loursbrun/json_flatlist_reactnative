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
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <FlatList
         data={this.state.dataSource}
         renderItem={({item}) => 
         
         <View>
             <View id="thumbnail"></View>
             <Text id="adress">{item.adress}</Text>
             <TouchableOpacity id="share"></TouchableOpacity>
             <TouchableOpacity id="compare"></TouchableOpacity>
             <View id="space"></View>
             <TouchableOpacity id="like"></TouchableOpacity>
             <TouchableOpacity id="premium"></TouchableOpacity>
           </View>

        
        }
         keyExtractor={({id}, index) => id}
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
