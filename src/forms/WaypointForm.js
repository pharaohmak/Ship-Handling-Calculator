import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class WayPointForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waypoint: 0,
            input: '',
            speed: '',
            advance: '',
            calc: 0
        };
        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.calcWaypoint = this.calcWaypoint.bind(this);
        this.storeData = this.storeData.bind(this);
    }


  onButtonPressed = function() { this.setState({ waypoint:this.state.speed })}
  _handleTextChange = advance => { this.setState({ advance }); 
  };
  _handleTextChange2 = speed => { this.setState({ speed }); 
  };


  calcWaypoint = async function(){
    var x = parseFloat(this.state.advance)
    var y = parseFloat(this.state.speed)
    var calc = (x * 60) / y
    this.setState({ waypoint: calc})
    this.storeData(await this.state.advance)
  }
  
  //save the input
 storeData = async () => {
    let waypoint = this.state.waypoint;
    await AsyncStorage.setItem('@waypoint', waypoint.toString())
    console.log('Stored Waypoint: ' + waypoint)
}
        

   render() {
    const {waypoint} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
        <Text style={styles.paragraph}>
          Vessel Minutes to waypoint:  { waypoint.toFixed(2)} (minutes)
        </Text>

        <Text style={styles.text}> Advance (nm): </Text>
        <TextInput
          value={this.state.advance}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />

        <Text style={styles.text}> Speed (kts): </Text>
        <TextInput
          value={this.state.speed}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcWaypoint.bind(this)} 
          style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
      </View>

      </TouchableWithoutFeedback>

      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  text: {
    color: 'black',
    fontSize: 18,
    padding: 10,
    
  },
  input: {
    backgroundColor: 'grey',
    width: 300,
    height: 35,
    color: 'white'
  },
  button: {
    padding: 18,
    margin: 16,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50
  },
});

export default WayPointForm;