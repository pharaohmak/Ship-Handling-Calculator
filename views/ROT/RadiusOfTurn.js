import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateRadiusOfTurn extends React.Component {    
   
  constructor(props) {
    super(props);
  
    this.state = {
      speed: '',
      rot: '',
      radius: 0
    };
  }
  
  calculateSum = () => {
    const { speed, rot } = this.state;
  
    this.setState({
      radius: ((0.955) * Number(speed)) / Number(rot),
    });
    this.ButtonAlert(this.state.radius)
  }

  ButtonAlert = () => {
    Alert.alert(
      "Rate of Turn Radius",
      `Radius ${this.state.radius.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log(`${this.state.radius}`) }
      ]
    );

  }


  render() {
    return (
      <View>
        <Text style={styles.text}>Speed (kts)</Text>
        <TextInput
          style={styles.input}
          value={this.state.speed}
          onChangeText={(speed) => this.setState({speed})}
        />

        <Text style={styles.text}>ROT (dpm)</Text>
        <TextInput
          style={styles.input}
          value={this.state.rot}
          onChangeText={(rot) => this.setState({rot})}
        />
  
        <TouchableHighlight onPress={this.calculateSum}
        style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'

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
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
})

export default CalculateRadiusOfTurn;
