import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import LottieView from "lottie-react-native";
import Loading from "./loading";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: -15 }}>
      <View>
        <LottieView
          source={require("../onb_files/hello.json")}
          autoPlay
          style={{
            height: 600,
            width: 300,
            backgroundColor: "white",
            alignSelf: "center",
            left: "0%",
            top: "2%",
          }}
        />
      </View>
      <View style={styles.below}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            letterSpacing: 2,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Hello Reader, I am Chopper,
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            letterSpacing: 2,
            fontSize: 15,
            fontWeight: "bold",
            top: "2%",
          }}
        >
          the Kanemor Mascot.
        </Text>
        <Text
          style={{
            top: "8%",
            alignSelf: "center",
            fontSize: 20,
            letterSpacing: 4,
            fontSize: 15,
            color: "grey",
          }}
        >
          Get ready to experience
        </Text>
        <Text
          style={{
            top: "8%",
            alignSelf: "center",
            fontSize: 20,
            letterSpacing: 4,
            fontSize: 15,
            color: "grey",
          }}
        >
          our wonderful app.
        </Text>
        <TouchableOpacity
          style={styles.letsGo}
          onPress={() => navigation.navigate(Loading)}
        >
          <Text style={styles.text}>Let's Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  below: {
    backgroundColor: "white",
    height: 500,
    borderRadius: 40,
    top: "-8%",
    alignContent: "center",
  },
  letsGo: {
    height: 50,
    backgroundColor: "#3EE4B7",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    width: 250,
    marginTop: 20,
    top: "15%",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20,
    top: "20%",
    color: "white",
  },
});
