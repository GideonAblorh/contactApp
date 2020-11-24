import React, { Component } from "react";
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/actions/authActions";

import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
constructor(props);
{
  super(props);
  this.state = {
    email: "",
    password: "",
  };
}

handleUpdateState = (name, value) => {
  this.setState({
    [name]: value,
  });
};

handleOnSubmit = () => {
  this.props.loginEmailAccount(this.state.email, this.state.password);
};

function LoginScreen1({ navigation }) {
  return (
    <View>
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <View>
        {auth.error.login && <Text style={{ color: "red" }}>{auth.error.login}</Text>}

          <Text style={styles.loginText}>Log in</Text>
        </View>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            value={this.state.email}
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
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
            placeholder="password"
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Navigation.navigate("Contact");
            }}
            onPress={this.handleOnSubmit}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
  loginText: {
    fontSize: 40,
    color: "green",
  },
  loginContainer: {
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  forgotPassword: {
    marginVertical: 3,
    color: "#0853a8",
    alignSelf: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "#5100ad",
    justifyContent: "center",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  signup: {
    fontSize: 16,
    color: "#5100ad",
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { loginEmailAccount })(LoginScreen1);
