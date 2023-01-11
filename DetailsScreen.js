import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Cs1 from "./DetailBooks/cs1";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: -50 }}>
        <Image style={styles.bookies} source={require("./assets/da.png")} />
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {" "}
          Data Analysis for Beginners
        </Text>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 10,
            fontSize: 15,
          }}
        >
          {" "}
          Dr. Derriq Wujangi
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            fontWeight: "600",
            fontSize: 18,
            color: "red",
            marginBottom: 10,
          }}
        >
          {" "}
          Description
        </Text>
        <Text
          style={{
            fontSize: 15,
            alignSelf: "flex-start",
            lineHeight: 23,
            marginLeft: 5,
          }}
        >
          A simple example of data analysis can be seen whenever we take a
          decision in our daily lives by evaluating what has happened in the
          past or what will happen if we make that decision. Basically, this is
          the process of analyzing the past or future and making a decision
          based on that analysis. Businesses today need every edge and advantage
          they can get. Thanks to obstacles like rapidly changing markets,
          economic uncertainty, shifting political landscapes, finicky consumer
          attitudes, and even global pandemics, businesses today are working
          with slimmer margins for error.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.readButton}
          onPress={() => navigation.navigate(Cs1)}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookies: {
    height: 250,
    width: 200,
    alignSelf: "center",
    marginTop: 80,
    borderRadius: 10,
  },
  readButton: {
    backgroundColor: "cyan",
    height: 50,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
  },
});
