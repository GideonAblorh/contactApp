import React, { Component } from "react";
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import LoginScreen from './LoginScreen';
import ContactScreen from './ContactScreen';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      names: ["john", "yaw", "kwaku", "paul", "peter", "mansah", "james", "ruth", "esther",
      ],
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        {/* <LoginScreen/> */}
        <ContactScreen/>
        {/* <Contact/> */}
        
        {/* <TextInput
          style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          //secureTextEntry={true}
          value={this.state.email}
          onChangeText={(email) => {
            this.setState({ email });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.email}
          onChangeText={(password) => {
            this.setState({ password });
          }}
        />

        <TouchableOpacity onPress={} style={styles.buttonContainer}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  input: {
    backgroundColor: "green",
    height: 600,
    marginLeft: 15,
    marginBottom: 5,
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "blue",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    color: "#fff",
    fontSize: 20,
  },
});

export default App;
