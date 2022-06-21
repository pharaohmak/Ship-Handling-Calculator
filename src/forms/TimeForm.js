import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import styles from "./Styles"
class TimeForm extends Component {

  state = {
    time: 0,
    input: '',
    speed: '',
    distance: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ time:this.state.speed })}
  _handleTextChange = speed => { this.setState({ speed }); 
  };
  _handleTextChange2 = distance => { this.setState({ distance }); 
  };

  calcTime = function() {
    var x = parseFloat(this.state.speed);
    var y = parseFloat(this.state.distance);
    var calc = y / x;
    this.setState({ time: calc})
    return
  }
    
  render() {

    const { time } = this.state;
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Time:  {time.toFixed(2)} (hours)
          </Text>

          <Text style={styles.text}> Speed (kts): </Text>
          <TextInput
            value={this.state.speed}
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
          <TouchableHighlight onPress={this.calcTime.bind(this)} 
            style={styles.button}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableHighlight>
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TimeForm;