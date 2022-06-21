import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import styles from "./Styles"

class SpeedForm extends Component {

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
    return
  }
    
  render() {
  
    const { speed } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Speed:  {speed.toFixed(1)} (kts)
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
      </TouchableWithoutFeedback>
    );
  }
}

export default SpeedForm;