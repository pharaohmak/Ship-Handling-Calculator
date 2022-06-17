import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native';
import SpeedForm from '../forms/SpeedForm';

const Speed = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SpeedForm />
    
    <Button
      title="Calculate Time"
      onPress={() => navigation.navigate('Time')}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

  </View>
    
);


export default Speed;