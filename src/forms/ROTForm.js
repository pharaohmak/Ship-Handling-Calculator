import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./Styles"

class ROTForm extends Component {
  state = {
    rot: 0,
    input: '',
    speed: '',
    radius: '',
    calc: 0,
    round: 0
  }
  onButtonPressed = function() { this.setState({ rot:this.state.speed })}
  _handleTextChange = speed => { (this.setState({ speed })); 
  };
  _handleTextChange2 = radius => { (this.setState({ radius })); 
  };

  calcRot = function() {
    var x = parseFloat(this.state.speed);
    var y = parseFloat(this.state.radius);
    var calc = ((0.955) * x) / y;
    this.setState({ rot: calc})
    return;
  }



   
  render() {
  
    const { rot } = this.state

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.paragraph}>
          ROT:  { rot.toFixed(1) } (dpm)
        </Text>

        <Text style={styles.text}> Speed (kts): </Text>
        <TextInput
          value={this.state.speed}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />
        <Text style={styles.text}> Radius (nm): </Text>
        <TextInput
          value={this.state.radius}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcRot.bind(this)} 
          style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
      </View>

      </TouchableWithoutFeedback>

      
    );
  }
}

export default ROTForm;