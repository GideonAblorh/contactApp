import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import LoginScreen1 from "./LoginScreen1";
import ContactScreen1 from "./ContactScreen1";
import RegisterScreen from "./RegisterScreen";
import Contact from "./components/Contact";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import {logout} from '../redux/actions/authActions'

const Stack = createStackNavigator();
function AppContainer({auth, logout}) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Contact"
            options={{
              headerRight: () => (
                <TouchableOpacity style={{marginRight:20}}
                onPress={}
                >
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            }}
            Component={ContactScreen1}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ header: () => null }}
            Component={LoginScreen1}
          />
          <Stack.Screen
            name="Register"
            options={{ header: () => null }}
            Component={RegisterScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, {logout})(AppContainer);
