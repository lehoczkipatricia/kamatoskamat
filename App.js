import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';



export default function App() {
  const [betet, setBetet] = useState();
  const [tokesitesSzam, setTokesitesSzam] = useState();
  const [nevleges, setNevleges] = useState();
  const [tenyleges, setTenyleges] = useState();

  function handleCalcButton() {
    let tenylegesKamat = ((1+(nevleges/(100*tokesitesSzam))^tokesitesSzam)-1)*betet;
    setTenyleges(tenylegesKamat);

  }
  return (
    <View style={styles.container}>
      <Text>Kamatos kamat</Text>

      <Text>Betét: </Text><TextInput onChangeText={(betet)=>setBetet(betet)} placeholder='Ide irjon'/>

      <Text>Tőkésítések száma: </Text><TextInput onChangeText={(tokesitesSzam)=>setTokesitesSzam(tokesitesSzam)} placeholder='Ide irjon'/>

      <Text>Névleges kamat:</Text><TextInput onChangeText={(nevleges)=>setNevleges(nevleges)} placeholder='Ide irjon'/>

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
  }
});
