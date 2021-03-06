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


# Step 4
#####Mock HTTP responses to simulate a REST API

#####Mocky [Fetch](https://www.mocky.io/ "Mocky")

#####Add in body textfield and generate HTTP response

```json
{
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
    { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
    { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
    { "id": "4", "title": "Inception", "releaseYear": "2010" },
    { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
  ]
}

```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/mocky.png)


#####You have now a new link for data

```
http://www.mocky.io/v2/5bb4f7533000003500aabc0c
```

#####Change Fetch url
```javascript
  return fetch('https://facebook.github.io/react-native/movies.json')
```
#####By
```javascript
return fetch('http://www.mocky.io/v2/5bb4f8c03000007900aabc13')
```

#####You should have the same render

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step3.jpg)


# Step 5
#####Change data with this json

```json
{
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "adresses": [
      { "id": "1", "adress": "73 rue lecourbe 75015 Paris", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=48,843353&lon=2,305336&height=180&width=352"},
      { "id": "2", "adress": "place du 11 novembre 1918 69008 Lyon", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=45,737527&lon=4,86864&height=180&width=352"},
      { "id": "3", "adress": "place massena 06000 Nice", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,697784&lon=7,270133&height=180&width=352"},
      { "id": "4", "adress": "Passenans 39230 Passenans", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=46,798819&lon=5,617343&height=180&width=352"},
      { "id": "5", "adress": "Sassenay 71530 Sassenay", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=46,830917&lon=4,920356&height=180&width=352"},
      { "id": "6", "adress": "Cannes 06400 Cannes", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,552852&lon=7,017365&height=180&width=352"},
      { "id": "7", "adress": "Paris 75000 Paris", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=48,856617&lon=2,35224&height=180&width=352"},
      { "id": "8", "adress": "122 boulevard carnot 06300 Nice", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,691976&lon=7,293889&height=180&width=352"},
      { "id": "9", "adress": "plafeix 19170 L'Église-aux-Bois", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=45,661428&lon=1,821015&height=180&width=352"},
      { "id": "10", "adress": "teste 32100 Condom", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,950062&lon=0,357625&height=180&width=352"},
      { "id": "11", "adress": "testarouch 33380 Mios", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=44,661061&lon=-0,834639&height=180&width=352"},
      { "id": "12", "adress": "romette 05000 Gap", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=44,581078&lon=6,107564&height=180&width=352"},
      { "id": "13", "adress": "plafeix 19170 L'Église-aux-Bois", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=45,661428&lon=1,821015&height=180&width=352"},
      { "id": "14", "adress": "rue des 3 moulins 06600 Antibes", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,603807&lon=7,083869&height=180&width=352"},
      { "id": "15", "adress": "plag d'angon 74290 Talloires-Montmin", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=45,823612&lon=6,222094&height=180&width=352"},
      { "id": "16", "adress": "Saint-Tropez 83990 Saint-Tropez", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,269827&lon=6,639983&height=180&width=352"},
      { "id": "17", "adress": "garibaldi 30240 Le Grau-du-Roi", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=43,501745&lon=4,173967&height=180&width=352"},
      { "id": "18", "adress": "rue voltaire 33000 Bordeaux", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=44,842468&lon=-0,578595&height=180&width=352"},
      { "id": "19", "adress": "rue stanislas baudry 44000 Nantes  ", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=47,219302&lon=-1,54432&height=180&width=352"},
      { "id": "20", "adress": "place de clichy 75009 Paris ", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=48,883414&lon=2,327601&height=180&width=352"},
      { "id": "21", "adress": "35A rue de berstett 67200 Strasbourg", "liked": false, "premium": false, "thumbnail": "https://www.cityscan.fr/api/maps/thumbnail/lat=48,598198&lon=7,706368&height=180&width=352"}
    ]
  }
```

#####Change the link of Mocky by :

```javascript
http://www.mocky.io/v2/5bb481953300006630cad649
```

#####Add touchable areas touchableOpacity

######Reindente like
```javascript
  <FlatList
         data={this.state.dataSource}
         renderItem={({item}) => 
         
         <Text>{item.title}, {item.releaseYear}</Text>
        
        }
         keyExtractor={({id}, index) => id}
       />
```

#####Change the render with touchableOpacity component

```javascript
 <View>
             <View id="thumbnail"></View>
             <Text id="adress">{item.adress}</Text>
             <TouchableOpacity id="share"></TouchableOpacity>
             <TouchableOpacity id="compare"></TouchableOpacity>
             <View id="space"></View>
             <TouchableOpacity id="like"></TouchableOpacity>
             <TouchableOpacity id="premium"></TouchableOpacity>
           </View>

```

#####Change the response object to parse

```javascript
dataSource: responseJson.movies,
```

#####to

```javascript
dataSource: responseJson.adresses,
```

#####Add touchableOpacity from react-native

```javascript
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step5.jpg)


# Step 6
#####We will create containers to accommodate the buttons

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/containers.PNG)

#####Remove unused Flatlist

#####Add styles for TouchableOpacity

```javascript
render() {
    return (
      <View style={styles.container}>
        
        <FlatList
         data={this.state.dataSource}
         renderItem={({item}) => 
         
         <View>
           <View id="thumbnail" style={{width:350, height:180, backgroundColor:'pink'}}></View>
             <Text id="adress"  style={{width:350, height:60, backgroundColor:'lightskyblue'}}>{item.adress}</Text>
             <TouchableOpacity id="share" style={{width:50, height:50, backgroundColor:'green'}}></TouchableOpacity>
             <TouchableOpacity id="compare" style={{width:50, height:50, backgroundColor:'yellow'}}></TouchableOpacity>
             <View id="space" style={{width:90, height:50, backgroundColor:'grey'}}></View>
             <TouchableOpacity id="like" style={{width:50, height:50, backgroundColor:'aquamarine'}}></TouchableOpacity>
             <TouchableOpacity id="premium" style={{width:120, height:50, backgroundColor:'red'}}></TouchableOpacity>
           </View>

        
        }
         keyExtractor={({id}, index) => id}
       />

      </View>
    );
  }
}
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step6.jpg)



# Step 7
#####Encapsulate the bottom components, and change the flexDirection to "row"

```javascript
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

```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step7.jpg)



# Step 8
#####Use Flexbox to position components with the following proportions



#####To more understant flexbox play with [Flexbow tool](http://flexbox.buildwithreact.com/ "Flexbox")

```javascript
 <View>
              <View id="thumbnail" style={{ width: 350, height: 180, backgroundColor: 'pink' }}></View>
              <Text id="adress" style={{ width: 350, height: 60, backgroundColor: 'lightskyblue' }}>{item.adress}</Text>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity id="share" style={{ height: 50, backgroundColor: 'green', flex: 1 }}></TouchableOpacity>
                <TouchableOpacity id="compare" style={{ height: 50, backgroundColor: 'yellow', flex: 1 }}></TouchableOpacity>
                <View id="space" style={{ height: 50, backgroundColor: 'grey', flex: 2 }}></View>
                <TouchableOpacity id="like" style={{ height: 50, backgroundColor: 'aquamarine', flex: 1 }}></TouchableOpacity>
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: 'red', flex: 3 }}></TouchableOpacity>
              </View>
            </View>
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step8.jpg)




# Step 9
#####Add Image to item

#####React Native Doc [Image](https://facebook.github.io/react-native/docs/image "Image")

```javascript
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

```

```javascript
<View>
              <View id="thumbnail" style={{ height: 200, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', flex: 1 }}></Image>
              </View>
              <Text id="adress" style={{ height: 60, backgroundColor: 'lightskyblue', flex: 1 }}>{item.adress}</Text>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity id="share" style={{ height: 50, backgroundColor: 'green', flex: 1 }}>
                  <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/gray/sharethis-xxl.png' }} style={{ width: 26, height: 26, tintColor: 'grey', }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="compare" style={{ height: 50, backgroundColor: 'yellow', flex: 1 }}>
                  <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/12/100112_compare_512x512.png' }} style={{ width: 30, height: 30, tintColor: 'grey' }}></Image>
                </TouchableOpacity>
                <View id="space" style={{ height: 50, backgroundColor: 'grey', flex: 2 }}></View>
                <TouchableOpacity id="like" style={{ height: 50, backgroundColor: 'aquamarine', flex: 1 }}>
                  <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-heart-like-favourite-favorite-outline-stroke-512.png' }} style={{ width: 30, height: 30, tintColor: 'red' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: 'red', flex: 3 }}>
                  <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>
                  <Text>Premium</Text>
                </TouchableOpacity>
              </View>
            </View>
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step9.jpg)


# Step 10
#####Center the icons in their containers with the properties justifyContent: 'center' and alignItems: 'center'

```javascript
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
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: 'red', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>
                  <Text>Premium</Text>
                </TouchableOpacity>
              </View>
            </View>
```
#####Add style for item

```javascript
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
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step10.jpg)



#Step 11

#####Align the star and the text "Premium"

#####Add `flexDirection: 'row'`

```javascript
 <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: 'red', flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step11.jpg)



#Step 12

#####Add style to Item and Buttons

```javascript
 <View>
              <View id="thumbnail" style={{ height: 200, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', flex: 1 }}></Image>
              </View>
              <Text id="adress" style={{ height: 60, backgroundColor: 'lightskyblue', flex: 1, fontSize: 16, lineHeight: 60, paddingLeft: 10 }}>{item.adress}</Text>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity id="share" style={{ height: 50, backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/gray/sharethis-xxl.png' }} style={{ width: 26, height: 26, tintColor: 'grey', }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="compare" style={{ height: 50, backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/12/100112_compare_512x512.png' }} style={{ width: 30, height: 30, tintColor: 'grey' }}></Image>
                </TouchableOpacity>
                <View id="space" style={{ height: 50, backgroundColor: 'grey', flex: 2, margin: 4 }}></View>
                <TouchableOpacity id="like" style={{ height: 50, backgroundColor: 'aquamarine', flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-heart-like-favourite-favorite-outline-stroke-512.png' }} style={{ width: 30, height: 30, tintColor: 'red' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: '#E84242', flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 4, margin: 4 }}>
                  <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 20, height: 20, tintColor: 'white' }}></Image>
                  <Text style={{ fontSize: 20, lineHeight: 50, paddingLeft: 5, color: 'white' }}>Premium</Text>
                </TouchableOpacity>
              </View>
            </View>
```


![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step12.jpg)


#Step 13

#####Add a space and a white background on each item

```javascript
 <View id="item_container" style={{margin: 20, backgroundColor: 'white'}}>

```

#####Remove temporary colors of each containers

#####Add line under Adress text

```javascript
<View id="line" style={{ height: 1, flex: 1, backgroundColor: '#ececec'}}></View>

```

```javascript
 <View id="item_container" style={{margin: 20, backgroundColor: 'white'}}>
               <View id="thumbnail" style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', flex: 1   }}></Image>
              </View>
              <Text id="adress" style={{ height: 60, flex: 1, fontSize: 16, lineHeight: 60,  paddingLeft : 10 }}>{item.adress}</Text>
              <View id="line" style={{ height: 1, flex: 1, backgroundColor: '#ececec'}}></View>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity  id="share" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                      <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/gray/sharethis-xxl.png' }} style={{ width: 26, height: 26, tintColor: 'grey', }}></Image>
                </TouchableOpacity>
                <TouchableOpacity  id="compare" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                     <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/12/100112_compare_512x512.png' }} style={{ width: 30, height: 30, tintColor: 'grey' }}></Image>
                </TouchableOpacity>
                <View id="space" style={{ height: 50, flex: 2, margin: 4 }}></View>
                <TouchableOpacity  id="like" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                      <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-heart-like-favourite-favorite-outline-stroke-512.png' }} style={{ width: 30, height: 30, tintColor: 'red' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity  id="premium" style={{ height: 50, backgroundColor: '#E84242', flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 4, margin: 4 }}>
                   <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 20, height: 20, tintColor: 'white' }}></Image>
                   <Text style={{fontSize: 20, lineHeight: 50,  paddingLeft : 5, color: 'white'}}>Premium</Text>
                </TouchableOpacity>
              </View>
            </View>
```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step13.jpg)




# Step 14
#####Add Shadow to item

#####React Native Doc [Shadow](https://ethercreative.github.io/react-native-shadow-generator/ "Shadow")

```javascript
<View id="item_container" style={{
               margin: 20,
               backgroundColor: 'white',
               shadowColor: "#000",
               shadowOffset: {
                 width: 0,
                 height: 6,
               },
               shadowOpacity: 0.37,
               shadowRadius: 7.49,
               elevation: 12
           }}>

```

![](https://raw.githubusercontent.com/loursbrun/json_flatlist_reactnative/master/Image_Steps/step14.jpg)





# Step 15
#####Add action to buttons (TouchableOpacity)

#####React Native Doc [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity "TouchableOpacity")

#####Add to share TouchableOpacity component and Add it function just above `render()`
```javascript
onPress={this.onPressWidthValue.bind(this,'share')}

```

```javascript
onPressWidthValue = (value) => {
   console.log("Value passed :" + value)
 }

```

#####Pass one value from specific item (compare component)
```javascript
onPress={this.onPressWidthValue.bind(this,'share')}

```
```javascript
onPressWidthValue = (value) => {
   console.log("Value passed :" + value)
 }

```



#####Pass all values from specific item (liked component)
```javascript
onPress={this.onPressWidthItemValues.bind(this,item)}

```
```javascript
onPressWidthItemValues = (item) => {
   console.log("Adresse :" + item.adress)
   console.log("Liked :" + item.liked)
   console.log("Premium :" + item.premium)
 }

```

