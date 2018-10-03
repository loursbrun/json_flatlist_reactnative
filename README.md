#Json Flatlist React Native


# Step 1
#####Install React Native project


```shell
create-react-native-app JsonFlatlist
```

#####Perform App On Expo


```shell
exp start
```
![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step1.jpg)


# Step 2
#####Create a list view using the React Native doc

#####React Native Doc [Listview](https://facebook.github.io/react-native/docs/using-a-listview "Heading link")

Import `Flatlist` from react-native

```javascript
import { StyleSheet, Text, View, FlatList } from 'react-native';
```

Add `Flatlist` and data object
```javascript
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
      </View>
```
![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step2.jpg)


# Step 3
#####Make a query using Fetch

#####React Native Doc [Fetch](https://facebook.github.io/react-native/docs/network "Fetch")

Import `ActivityIndicator` from react-native
```javascript
import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';

```

#####Redefine the constructor and add `isLoading` in property state

```javascript
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
```


#####Run the Fetch Query in the `ComponentDidMount` Component Lifecycle

```javascript
componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
```

#####Add the spinner in the render so that it's displayed as long as the callback the Fetch Query is not executed

```javascript
render() {
   if(this.state.isLoading){
     return(
       <View style={{flex: 1, padding: 20}}>
         <ActivityIndicator/>
       </View>
     )
   }
   return (   /* … la suite

```

#####Add a new Flatlist below the one already in place that will loop on the items

```javascript
<FlatList
         data={this.state.dataSource}
         renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
         keyExtractor={({id}, index) => id}
       />

```
![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step3.jpg)

