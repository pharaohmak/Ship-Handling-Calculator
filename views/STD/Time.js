import React from 'react';
import { View, StyleSheet, TextInput, Text,Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateTime extends React.Component {
   
  constructor(props) {
    super(props);
  
    this.state = {
      distance: '',
      speed: '',
      time: 0
    };
  }
  
  calculateSum = () => {
    const { distance, speed } = this.state;
  
    this.setState({
      time: Number(distance) / Number(speed)
    });
    this.ButtonAlert()
  }

  ButtonAlert = () => {
    Alert.alert(
      "Speed Time Distance ",
      `Time ${this.state.time.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log(Math.round(`${this.state.time}`)) }
      ]
    );

  }
  
  render() {
    return (
    
      <View>
        <Text style={styles.text}>Distance (nm)</Text>
        <TextInput
        style={styles.input}
          value={this.state.distance}
          onChangeText={(distance) => this.setState({distance})}
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

export default CalculateTime;
