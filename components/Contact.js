import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Contact({name, phone}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image}/>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="local-phone" size={20} color="#009cf5" />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="message-processing"
          size={20}
          color="#009cf5"
        />
      </View>
      <View style={styles.icon}>
        <SimpleLineIcons name="options-vertical" size={20} color="#a8a8a8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical:6,
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  details: {
    justifyContent: "center",
    marginHorizontal: 15,
    flex: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  icon: {
    flex: 1,
  },
});
