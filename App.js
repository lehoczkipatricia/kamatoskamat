import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';



export default function App() {
  const [betet, setBetet] = useState();
  const [tokesitesSzam, setTokesitesSzam] = useState();
  const [nevleges, setNevleges] = useState();
  const [tenyleges, setTenyleges] = useState();

  function handleCalcButton() {
    
    let tenylegesKamat = (Math.pow((1+(nevleges/(100*tokesitesSzam))), tokesitesSzam)-1)*betet;
    setTenyleges(tenylegesKamat.toFixed(2));

  }
  return (
    <View style={styles.container}>
      <Text>Kamatos kamat</Text>

      <Text>Betét: </Text><TextInput onChangeText={(betet)=>setBetet(betet)} />

      <Text>Tőkésítések száma: </Text><TextInput style={styles.textInput} onChangeText={(tokesitesSzam)=>setTokesitesSzam(tokesitesSzam)} />

      <Text>Névleges kamat:</Text><TextInput onChangeText={(nevleges)=>setNevleges(nevleges)} />

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>Számol</Text>
      </TouchableHighlight>

      <Text>Tényleges kamat: {tenyleges}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'blue',
    marginTop: 5,
    padding: 5,
    borderRadius: 3,
  },
  runText: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 15,
  },
  textInput: {
    border: '1px solid rgba(0, 0, 0, 0.05)'

  }
});
