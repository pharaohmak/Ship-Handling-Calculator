import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native';

class CalculateSpeed extends Component {

  state = {
    speed: 0,
    input: '',
    time: '',
    distance: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ text:this.state.time })}
  _handleTextChange = time => { this.setState({ time }); 
  };
  _handleTextChange2 = distance => { this.setState({ distance }); 
  };

  calcSpeed = function() {
    var x = parseFloat(this.state.time);
    var y = parseFloat(this.state.distance);
    var calc = y / x;
    this.setState({ speed: calc})
  }
    
  render() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Speed:  {this.state.speed.toFixed(2)} (kts)
        </Text>

        <Text style={styles.text}> Time (hours): </Text>
        <TextInput
          value={this.state.time}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />

        <Text style={styles.text}> Distance (nm): </Text>
        <TextInput
          value={this.state.distance}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcSpeed.bind(this)} 
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

export default CalculateSpeed;