import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { createEmailAccount, registerError } from "../redux/actions/authActions";

function RegisterScreen() {
  constructor(props);
  {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Password do not match")
    }
    this.props.createEmailAccount(this.state.email, this.state.password)
  };

  const { navigation, auth } = this.props;
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.loginText}> Sign Up </Text>
      </View>
      <View>
        {auth.error.register && <Text style={{ color: "red" }}>{auth.error.register}</Text>}
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          value={this.state.email}
          onChangeText={(text) => {
            this.handleUpdateState("email", text);
          }}
          secureTextEntry={true}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          value={this.state.password}
          onChangeText={(text) => {
            this.handleUpdateState("password", text);
          }}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          value={this.state.confirm}
          onChangeText={(text) => {
            this.handleUpdateState("confirm", text);
          }}
          secureTextEntry={true}
          placeholder="Password Again"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleOnSubmit}
        >
          <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}> You already have an account?</Text>
        <Text style={styles.Login}> Log In</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    // alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 40,
    color: "#5100ad",
  },
  signupContainer: {
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: "#5100ad",
    justifyContent: "center",
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 50,
  },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 25,
  //   borderRadius: 20,
  // },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  Login: {
    color: "#5100ad",
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { createEmailAccount, registerError })(RegisterScreen);
