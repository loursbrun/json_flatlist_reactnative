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
