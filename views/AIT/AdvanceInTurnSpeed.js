import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';
import CalculateAdvanceDistance from './AdvanceInTurn';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateAdvanceInTurnSpeed extends React.Component {
   
  
  advance = CalculateAdvanceDistance;

  constructor(props) {
    super(props);
  
    this.state = {
      advance: {CalculateAdvanceDistance},
      speed: '',
      vector: 0
    };
  }

  
  
  calculateSum = () => {
    const { advance, speed } = this.state;
  
    this.setState({
      vector: Number(advance) *  (Math.tan((Number(speed)/2)))
    });
    this.ButtonAlert()
    
  }

  ButtonAlert = () => {
    Alert.alert(
      "Vector Minutes to Waypoint ",
      `Advance ${this.state.vector.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log((`${this.state.vector }`)) }
      ]
    );

  }
  
  render() {
    return (
      <View>
        <Text style={styles.text}>Advance (nm)</Text>
        <TextInput
        style={styles.input}
          value={this.state.advance}
          onChangeText={(advance) => this.setState({advance})}
        />

        <Text style={styles.text}>Speed (kts)</Text>
        <TextInput
        style={styles.input}

          value={this.state.speed}
          onChangeText={(speed) => this.setState({speed})}
        />
  
        <TouchableHighlight style={styles.button} onPress={this.calculateSum}>
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

export default CalculateAdvanceInTurnSpeed;