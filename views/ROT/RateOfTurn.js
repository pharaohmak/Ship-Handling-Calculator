import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateRateOfTurn extends React.Component {
   
  constructor(props) {
    super(props);
  
    this.state = {
      speed: '',
      radius: '',
      rot: 0
    };
  }
  
  calculateSum = () => {
    const { speed, radius } = this.state;
  
    this.setState({
      rot: Math.round(((0.955) * Number(speed)) / Number(radius))
    });
    this.ButtonAlert(this.state.rot)

    return this.state.rot

  }


  ButtonAlert = () => {
    Alert.alert(
      "Rate Of Turn ",
      `ROT ${this.state.rot.toFixed(2)} (dpm)`,
      [
        { text: "OK", onPress: () => console.log(Math.round(`${this.state.rot}`)) }
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

        <Text style={styles.text}>Radius (nm)</Text>
        <TextInput
        style={styles.input}

          value={this.state.radius}
          onChangeText={(radius) => this.setState({radius})}
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

export default CalculateRateOfTurn;
