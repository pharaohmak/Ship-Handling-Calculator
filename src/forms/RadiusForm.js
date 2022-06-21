import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import styles from "./Styles"

class RadiusForm extends Component {
  state = {
    radius: 0,
    input: '',
    speed: '',
    rot: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ speed:this.state.speed })}
  _handleTextChange = speed => { this.setState({ speed }); 
  };
  _handleTextChange2 = rot => { this.setState({ rot }); 
  };

  calcRadius = function() {
    var x = parseFloat(this.state.speed) 
    var y = parseFloat(this.state.rot)
    var calc = ((0.955) * x) / y;
    this.setState({ radius: calc})
    return;
}
    
  render() {

    const { radius } = this.state;
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Radius:  {radius.toFixed(2)} (nm)
          </Text>

          <Text style={styles.text}> Speed (kts): </Text>
          <TextInput
            value={this.state.speed}
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
          <TouchableHighlight onPress={this.calcRadius.bind(this)} 
            style={styles.button}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableHighlight>
      </View>
    </TouchableWithoutFeedback>
      
    );
  }
}

export default RadiusForm;
