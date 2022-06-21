import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';

class ROTSpeedForm extends Component {
  state = {
    rotSpeed: 0,
    input: '',
    radius: '',
    rot: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ rotSpeed:this.state.radius })}
  _handleTextChange = radius => { this.setState({ radius }); 
  };
  _handleTextChange2 = rot => { this.setState({ rot }); 
  };

  calcRotSpeed = function() {
    var x = parseFloat(this.state.radius);
    var y = parseFloat(this.state.rot);
    var calc = (x * y) / 0.955;
    this.setState({ rotSpeed: calc})
    return
  }
    
  render() {

    const { rotSpeed } = this.state;
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.paragraph}>
          Speed:  {rotSpeed.toFixed(1)} (kts)
        </Text>

        <Text style={styles.text}> Radius (nm): </Text>
        <TextInput
          value={this.state.radius}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />
        <Text style={styles.text}> Rate of Turn (dpm): </Text>
        <TextInput
          value={this.state.rot}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcRotSpeed.bind(this)} 
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
    borderRadius: 50, 
    width: 300
  },
  buttonText:{
    color: 'white'
  }
});

export default ROTSpeedForm;