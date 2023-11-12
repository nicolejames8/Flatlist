import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
  {
    id: 1,
    name: "OLAGUIR, MEMPHIS",
    place: "Memphis, Tennessee"
},
{
    id: 2,
    name: "PAGUICAN, NICOLE JAMES",
    place: "Japan, Tokyo"
},
{
    id: 3,
    name: "FELISILDA, ARNOLD JAMES",
    place: "Switzerland"
},
{
    id: 3,
    name: "PAGUICAN, KIM LEO",
    place: "Canada"
},
{
    id: 3,
    name: "JANNAH, MARIE",
    place: "Japan, Kyota"
},
{
    id: 3,
    name: "JAGUNOS, JOANA",
    place: "Philippines"
},
{
    id: 3,
    name: "CARBONILLA, MARLON",
    place: "Spain"
},
{
    id: 3,
    name: "SARABIA, EARL ",
    place: "China"
},
{
    id: 3,
    name: "WARREN, JAMES",
    place: "India"
},
{
    id: 3,
    name: "TAHIL, ADRIAN",
    place: "Russia"
},
{
    id: 3,
    name: "LADAGA, JANWEL",
    place: "Korea, Seoul"
},
{
    id: 3,
    name: "AMORA, KENT",
    place: "Rome, Italy"
},
{
    id: 3,
    name: "JUNTILLA, HERSHIEL",
    place: "United States of America"
},
{
    id: 3,
    name: "PILIPINO, JESREL",
    place: "Taiwan"
},
{
    id: 3,
    name: "MADANGUIT, RUSSEL ",
    place: "Cambodia"
},
];
const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const reversedInitials = nameParts.map((part) => part.charAt(0)).reverse().join('').toUpperCase();
  return reversedInitials;
};


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50}name={getReciprocatedInitials(item.name)}style={{ backgroundColor: '#0000FF' }}  />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#000" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
  place: {

  }
});

export default App;