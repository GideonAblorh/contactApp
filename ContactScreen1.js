import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Contact from './components/Contact';
function ContactScreen1({navigation}) {
  const contacts = [
    { name: "Mathew Shaker", number: "0266406166" },
    { name: "Mark Shake", number: "0247764481" },
    { name: "Luke Arm", number: "0244057819" },
    { name: "John West ", number: "0279826601" },
    { name: "James Chopper", number: "0201247171" },
    { name: "Andrew Chuker", number: "0598574900" },
    { name: "Jonathan Blaze", number: "0243153742" },
    { name: "Peter Fish", number: "0243153742" },
    { name: "Mathew Shaker", number: "0266406166" },
    { name: "Mark Shake", number: "0247764481" },
    { name: "Luke Arm", number: "0244057819" },
    { name: "John West ", number: "0279826601" },
    { name: "James Chopper", number: "0201247171" },
    { name: "Andrew Chuker", number: "0598574900" },
    { name: "Jonathan Blaze", number: "0243153742" },
    { name: "Peter Fish", number: "0243153742" },
    { name: "Mathew Shaker", number: "0266406166" },
    { name: "Mark Shake", number: "0247764481" },
    { name: "Luke Arm", number: "0244057819" },
    { name: "John West ", number: "0279826601" },
    { name: "James Chopper", number: "0201247171" },
    { name: "Andrew Chuker", number: "0598574900" },
    { name: "Jonathan Blaze", number: "0243153742" },
    { name: "Peter Fish", number: "0243153742" },
    { name: "Mathew Shaker", number: "0266406166" },
    { name: "Mark Shake", number: "0247764481" },
    { name: "Luke Arm", number: "0244057819" },
    { name: "John West ", number: "0279826601" },
    { name: "James Chopper", number: "0201247171" },
    { name: "Andrew Chuker", number: "0598574900" },
    { name: "Jonathan Blaze", number: "0243153742" },
    { name: "Peter Fish", number: "0243153742" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({item })=>{
          return <Contact name={item.name} phone={item.number}/>
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    marginTop: 60,
    },
    });

export default ContactScreen1;
