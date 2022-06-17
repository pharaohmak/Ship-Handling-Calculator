import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native';
import WaypointForm from '../forms/WaypointForm';
import AdvanceForm from '../forms/AdvanceForm';

const VectorWaypoint = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <WaypointForm />
      
      <StatusBar backgroundColor = "#28F1A6" />
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
     
    </View> 
    
);


export default VectorWaypoint;
