import React from 'react';
import{ StyleSheet,  Text,  View, Button, TextInput, FlatList}  from'react-native';

export default function App  () {


function setList() {
    lisaa([{teksti: ostos, key: Math.random().toString()},
    ...lista
   ]);
  }

function tyhjenna() {
    lisaa([{}]);
}

const [lista, lisaa] = React.useState([]);
const[ostos, setText] = React.useState('');

  
return( 
  <View style={styles.container}>
    <View style={styles.contInput}>
    <TextInput
      style={styles.input}
      placeholder='Lisää ostoksia'
      onChangeText={ostos => setText(ostos)}
      value={ostos}
    />
    </View>
    <View style={styles.contButton}>
    <Button onPress={setList}title="Lisää"/>
    <Button onPress={tyhjenna}title="Tyhjennä"/>
    </View>
    <Text>Ostokset:</Text>
    <FlatList 
    data={lista}
    renderItem={({item}) =>
      <Text>{item.teksti}</Text>}
    />
  </View >
);
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 15,
  },
  contInput:{
    flex: 0.1,
    alignItems: 'center',
  },
  input:{
    height: 40,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 8,
    margin: 5,
  },
  contButton:{
    flexDirection: 'row',
    justifyContent: 'center',
  }
});