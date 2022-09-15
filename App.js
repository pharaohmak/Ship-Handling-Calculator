import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RadiusOfTurn from './src/screens/RadiusOfTurn';
import RateOfTurn from './src/screens/RateOfTurn';
import AdvanceInTurn from './src/screens/AdvanceTurn';
import RateOfTurnSpeed from './src/screens/RateOfTurnSpeed';
import VectorWaypoint from './src/screens/VectorWaypoint';
import Speed from './src/screens/Speed';
import Distance from './src/screens/Distance';
import Time from './src/screens/Time';
import SwingCircle from './src/screens/SwingCircle';
import RatePerMin from './src/screens/RatePerMin';

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
          options={{ title: 'Calculate Radius of Turn' }}
        />

        <Stack.Screen
          name="RateOfTurnSpeed"
          component={RateOfTurnSpeed}
          options={{ title: 'Calculate ROT Speed' }}
        />

        <Stack.Screen
          name="RateOfTurn"
          component={RateOfTurn}
          options={{ title: 'Calculate Rate Of Turn' }}
        />

        <Stack.Screen
          name="AdvanceInTurn"
          component={AdvanceInTurn}
          options={{ title: 'Calculate Advance Distance' }}
        />

        <Stack.Screen
          name="VectorWaypoint"
          component={VectorWaypoint}
          options={{ title: 'Calculate Vector Length to Waypoint' }}
        />

        <Stack.Screen
          name="Distance"
          component={Distance}
          options={{ title: 'Calculate Distance' }}
        />

        <Stack.Screen
          name="Speed"
          component={Speed}
          options={{ title: 'Calculate Speed' }}
        />

        <Stack.Screen
          name="Time"
          component={Time}
          options={{ title: 'Calculate Time' }}
        />

        <Stack.Screen
          name="SwingCircle"
          component={SwingCircle}
          options={{ title: 'Calculate Anchor Swing Circle' }}
        />

        <Stack.Screen
          name="RatePerMin"
          component={RatePerMin}
          options={{ title: 'Calculate Roataions Per Minute' }}
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

});

export default App;