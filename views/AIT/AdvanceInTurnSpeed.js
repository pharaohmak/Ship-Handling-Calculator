import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native';
/** 
class CalculateAdvanceInTurnSpeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    this.fetchUsersAsync();
  }

  fetchUsersAsync() {
    const advance =  "./AdvanceInTurn.js";
    fetch(advance)
      .then((response) => response.json())
      .then((list) => this.setState({ data: list }));
  }

  calcWaypoint = function(){
    var x = (this.state.advance)
    var y = parseFloat(this.state.speed)
    var calc = (x * 60) / y
    this.setState({ waypoint: calc})
  }

  render() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Advance Distance:  {this.state.data} (nm)
        </Text>

        <Text style={styles.text}> Radius (nm): </Text>
        <TextInput
          value={this.state.radius}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />

        <Text style={styles.text}> Delta (deg): </Text>
        <TextInput
          value={this.state.delta}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcAdvance.bind(this)} 
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

export default CalculateAdvanceInTurnSpeed;

*/