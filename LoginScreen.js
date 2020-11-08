import React, { Component } from 'react';
import{View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'


export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false} >
          <View>
              <Text style={styles.loginText}>Log in</Text>
          </View>

          <View style={styles.loginContainer}>
              <TextInput style={styles.input} placeholderTextColor="#aaaaaa" placeholder="Username"/>
              <TextInput style={styles.input} placeholderTextColor="#aaaaaa" secureTextEntry={true}  placeholder="password"/>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>

          <View>
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}> Login</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.noAccountContainer}>
              <Text style={styles.noAccountText}>Don't have an account?</Text>
              <Text style={styles.signup}><a href="#">Sign Up</a></Text>
          </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:50
    },
    loginText:{
        fontSize:40,
        color:"green"
    },
    loginContainer:{
        marginBottom:40
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:"#5100ad",
        fontSize:20,
        height:50,
        marginTop:20
    },
    forgotPassword:{
        marginVertical:3,
        color:"#0853a8",
        alignSelf:"flex-end"
    },
    buttonContainer:{
        backgroundColor:"#5100ad",
        justifyContent:"center",
        height:50,
        alignItems:"center",
        borderRadius:10,
        marginVertical:50
    },
    buttonText:{
        color:"#fff",
        fontSize:25
    },
    noAccountContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    noAccountText:{
        marginRight:10,
        fontSize:16
    },
    signup:{
        fontSize:16,
        color:"#5100ad"
    },


})
