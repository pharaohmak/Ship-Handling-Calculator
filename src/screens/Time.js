import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Button } from 'react-native';
import TimeForm from '../forms/TimeForm';

const Time = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TimeForm />
        
      <Button
        title="Calculate Distance"
        onPress={() => navigation.navigate('Distance')}
      />

      <Button 
        title="Calculate Speed" 
        onPress={() => navigation.navigate('Speed')} 
      />

      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />
  
      </View>
    
);


export default Time;