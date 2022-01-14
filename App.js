import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.row1}>
        <Text style={styles.box1}>Box 1</Text>
        <Text style={styles.box2}>Box 2</Text>
        <Text style={styles.box3}>Box 3</Text>
      </View>

     
      <Text style={styles.box4}>Box 4</Text>
      <Text style={styles.box5}>Box 5</Text>

      <View style={styles.row2}>
       <View style={styles.box6}>
         <Text>Box 6</Text>
         </View>
        <View style={styles.box7}>
          <Text style={{color: 'white'}}>Box 7</Text>
          </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop: 40
  },

  row1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  box1: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 20,
  },

  box2: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20,
    textAlign: 'center'
  },

  box3: {
    flex: 3,
    backgroundColor: 'red',
    padding: 20,
    textAlign: 'center'
  },

  box4: {
    backgroundColor: 'pink',
    padding: 20,
    textAlign: 'center'
  },

  box5: {
    backgroundColor: 'blue',
    padding: 20,
    textAlign: 'center'
  },

  row2:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  box6: {
    backgroundColor: 'green',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1 
  },
  box7: {
    backgroundColor: 'black',
    padding: 20,
    textAlign: 'center',
    color: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    flex:1 
  },

});
