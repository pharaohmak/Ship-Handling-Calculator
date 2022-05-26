import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { View, StyleSheet } from 'react-native';


class CalculateAnchorSwingCircle extends React.Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
        shackles: '',
        vessel: '',
        sum: 0
        };
    }
    
      calculateSum = () => {
        const { shackles, vessel  } = this.state;
      
        this.setState({
            sum: Math.round(Number(shackles) / Number(vessel))

        });
      }
      
      render() {
        return (
          <View>
            <Text style={styles.value}>{`Your Swing Circle is ${this.state.sum} nm`}</Text>

              <View style={styles.container}>
              <Text style={styles.text}># Shackles on Deck:</Text>
              <TextInput
              value={this.state.shackles}
              style={styles.textInput}
              onChangeText={(shackles) => this.setState({shackles})}
            />
              </View>
              
            
            <Text style={styles.text}>Vessel LOA (nm):</Text>
            <TextInput
              value={this.state.vessel}
              style={styles.textInput}
              onChangeText={(vessel) => this.setState({vessel})}
            />
      
            <TouchableHighlight onPress={this.calculateSum} style={styles.button}>
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableHighlight>
      
          </View>
        );
      }
    
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black'
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        backgroundColor: 'grey',
        width: 375,
        padding: 10,
        margin: 10,
        color: 'white'
    }, 
    text: {
        padding: 10,
        fontSize: 18
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
        margin: 10,
        marginTop: 45,
        borderRadius: 20
    },
    value: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 30,
        width: 375,
        margin: 10,
        backgroundColor: 'red',
        marginBottom: 50
    }

})


export default CalculateAnchorSwingCircle;
