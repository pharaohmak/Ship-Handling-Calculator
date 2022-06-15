import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { Pressable } from 'react-native';
import Header from './components/Header';
import CalculateSpeedTimeDistance from './views/STD/Distance'
import CalculateSpeed from './views/STD/Speed';
import CalculateTime from './views/STD/Time';
import CalculateAdvanceInTurn from './views/AIT/AdvanceInTurn';
import CalculateAnchorSwingCircle from './views/AnchorSwingCircle';
import CalculateRadiusOfTurn from './views/ROT/RadiusOfTurn';
import CalculateRateOfTurn from './views/ROT/RateOfTurn';
import CalculateRateOfTurnSpeed from './views/ROT/RateOfTurnSpeed';
import CalculateAdvanceInTurnSpeed from './views/AIT/AdvanceInTurnSpeed';

function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.buttonGroupContainer}>
        <Header/>
            <View style={styles.buttonGroup}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('RadiusOfTurn')}
                >
                    <Text style={styles.textStyle}>Rate of Turn</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('AdvanceInTurn')}
                >
                    <Text style={styles.textStyle}>Advance in Turn</Text>
                </Pressable>
            </View>

            <View style={styles.buttonGroup} >
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('SpeedTimeDistance')}
                >
                    <Text style={styles.textStyle}>Speed Time Distance</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('AnchorSwingCircle')}
                >
                    <Text style={styles.textStyle}>Anchor Swing Circle</Text>
                </Pressable>
            </View>
        </SafeAreaView>
     
    </View>
  );
}

function RadiusOfTurn({ navigation }) {

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <CalculateRadiusOfTurn />

      <Button
        title="Calculate Rate of Turn"
        onPress={() => navigation.navigate('RateOfTurn')}
      />
      <Button 
        title="Go Home" 
        onPress={() => navigation.navigate('Home')} />
      
    </View>

  )
}

function RateOfTurn({ navigation }) {

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateRateOfTurn />

      <Button
        title="Calculate Speed"
        onPress={() => navigation.navigate('RateOfTurnSpeed')}
      />
      <Button 
      title="Go Home" 
      onPress={() => navigation.navigate('Home')} />
      
    </View>
  )
}

function RateOfTurnSpeed({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <CalculateRateOfTurnSpeed />
      <Button
        title="Calculate Radius of Turn"
        onPress={() => navigation.navigate('RadiusOfTurn')}
      />
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} />
      
    </View>
  )
}

function AdvanceInTurn({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateAdvanceInTurn />

    <Button title="Calculate Vector Length" onPress={() => navigation.navigate('AdvanceInTurnSpeed')}/>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
     
    </View>
  );
}

function AdvanceInTurnSpeed ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
   
  </View> 
  )
}

function SpeedTimeDistance({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateSpeedTimeDistance />

      <Button
        title="Calculate Speed"
        onPress={() => navigation.navigate('Speed')}
      />
     
      <Button 
      title="Go Home" 
      onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
}

function Speed({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateSpeed />
      
      <Button
        title="Calculate Time"
        onPress={() => navigation.navigate('Time')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </View>
  );
}

function Time({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateTime />
      
      
      <Button
        title="Calculate Speed Time Distance"
        onPress={() => navigation.navigate('SpeedTimeDistance')}
      />
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} />

    </View>
  );
}

function AnchorSwingCircle({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateAnchorSwingCircle />
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Ship Handling Calculator' }}
        />
        <Stack.Screen 
        name="RadiusOfTurn" 
        component={RadiusOfTurn} 
        options={{ title: 'Calculate Radius of Turn'}}
        />
        <Stack.Screen 
        name="RateOfTurnSpeed" 
        component={RateOfTurnSpeed} 
        options={{ title: 'Calculate ROT Speed'}}
        />
        <Stack.Screen 
        name="RateOfTurn" 
        component={RateOfTurn} 
        options={{ title: 'Calculate Rate Of Turn'}}
        />
        <Stack.Screen 
        name="AdvanceInTurn" 
        component={AdvanceInTurn} 
        options={{ title: 'Calculate Advance Distance'}}
        />
        <Stack.Screen
        name="AdvanceInTurnSpeed"
        component={AdvanceInTurnSpeed}
        options={{ title: 'Calculate Vector Length to Waypoint'}}
        />
        <Stack.Screen 
        name="SpeedTimeDistance" 
        component={SpeedTimeDistance} 
        options={{ title: 'Calculate Speed Time Distance'}}
        />
        <Stack.Screen 
        name="Speed" 
        component={Speed} 
        options={{ title: 'Calculate Speed'}}
        />
        <Stack.Screen 
        name="Time" 
        component={Time} 
        options={{ title: 'Calculate Time'}}
        />
        <Stack.Screen 
        name="AnchorSwingCircle" 
        component={AnchorSwingCircle} 
        options={{ title: 'Calculate Anchor Swing Circle'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonGroup: {
      flexDirection: 'row',
      
      
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
  },
  
  button: {
      borderRadius: 20,
      textAlignVertical: "center",
      padding: 10,
      elevation: 2,
      padding: 20
      
  },
  buttonOpen: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "blue",
      margin: 12,
      height: 150,
      width: 150,
      
  },
  buttonGroupContainer: {
    justifyContent: 'space-between',
  },
  
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 22
  
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center"
  }
  });

export default App;