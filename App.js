import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { Pressable } from 'react-native';
import Header from './components/Header';
import CalculateRateOfTurn from './views/RateOfTurn/RateOfTurn';
import CalculateRateOfTurnSpeed from './views/RateOfTurn/Speed';
import CalculateRateOfTurnRadius from './views/RateOfTurn/Radius';
import CalculateSpeedTimeDistance from './views/SpeedTieDistance/SpeedTimeDistance';
import CalculateSpeed from './views/SpeedTieDistance/Speed';
import CalculateTime from './views/SpeedTieDistance/Time';
import CalculateAdvanceInTurn from './views/AdvanceInTurn';
import CalculateAnchorSwingCircle from './views/AnchorSwingCircle';

function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.buttonGroupContainer}>
        <Header/>
            <View style={styles.buttonGroup}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('RateOfTurn')}
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


function RateOfTurn({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateRateOfTurn />
      <Button
        title="Calculate Speed"
        onPress={() => navigation.navigate('Speed')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
}

function Speed({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateRateOfTurnSpeed />
      <Button
        title="Calculate Radius"
        onPress={() => navigation.navigate('Radius')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Calculate Rate Of Turn"
        onPress={() => navigation.navigate('RateOfTurn')}
      />
    </View>
  )
}

function Radius({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateRateOfTurnRadius />
      <Button
        title="Calculate Speed"
        onPress={() => navigation.navigate('Speed')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Calculate Rate Of Turn"
        onPress={() => navigation.navigate('RateOfTurn')}
      />
    </View>
  )
}

function AdvanceInTurn({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateAdvanceInTurn />
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
     
    </View>
  );
}

function SpeedTimeDistance({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateSpeedTimeDistance />
      <Button
        title="Calculate Speed Time"
        onPress={() => navigation.navigate('SpeedTime')}
      />
     
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
}

function SpeedTime({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateSpeed />
      
      <Button
        title="Calculate Time Distance"
        onPress={() => navigation.navigate('TimeDistance')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button
        title="Calculate Speed Time Distance"
        onPress={() => navigation.navigate('SpeedTimeDistance')}
      />
     
    </View>
  );
}

function TimeDistance({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalculateTime />
      <Button
        title="Calculate Speed Time"
        onPress={() => navigation.navigate('SpeedTime')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Calculate Speed Time Distance"
        onPress={() => navigation.navigate('SpeedTimeDistance')}
      />
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
        name="RateOfTurn" 
        component={RateOfTurn} 
        options={{ title: 'Calculate Rate of Turn'}}
        />
        <Stack.Screen 
        name="Speed" 
        component={Speed} 
        options={{ title: 'Calculate Speed'}}
        />
        <Stack.Screen 
        name="Radius" 
        component={Radius} 
        options={{ title: 'Calculate Radius'}}
        />
        <Stack.Screen 
        name="AdvanceInTurn" 
        component={AdvanceInTurn} 
        options={{ title: 'Calculate Advance in Turn'}}
        />
        <Stack.Screen 
        name="SpeedTimeDistance" 
        component={SpeedTimeDistance} 
        options={{ title: 'Calculate Speed Time Distance'}}
        />
        <Stack.Screen 
        name="SpeedTime" 
        component={SpeedTime} 
        options={{ title: 'Calculate Speed Time'}}
        />
        <Stack.Screen 
        name="TimeDistance" 
        component={TimeDistance} 
        options={{ title: 'Calculate Time Distance'}}
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