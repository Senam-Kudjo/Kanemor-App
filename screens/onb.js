import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import LottieView from "lottie-react-native";
import WelcomeScreen from "./WelcomeScreen";

export default function OnboardingScreen({ navigation }) {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide1}>
        <Text
          style={{
            marginTop: -120,
            fontSize: 35,
            fontWeight: "bold",
            color: "black",
            letterSpacing: 5,
          }}
        >
          KANEMOR
        </Text>
        <LottieView
          source={require("../onb_files/welcome.json")}
          autoPlay
          style={{
            marginTop: -80,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#01966D",
            letterSpacing: 3,
            marginTop: 350,
          }}
        >
          Hello, Welcome Onboard!
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: "black",
            letterSpacing: 2,
            marginTop: 10,
          }}
        >
          Enjoy Your Stay.
        </Text>
      </View>
      <View style={styles.slide2}>
        <LottieView
          source={require("../onb_files/girlwithbooks.json")}
          autoPlay
          style={{
            marginTop: 0,
            height: 400,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            top: "5%",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          A Wide Range Of Books.
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: "black",
            top: "7%",
            textAlign: "center",
            letterSpacing: 3,
            lineHeight: 23,
          }}
        >
          Science, Humanites, Engineering, Theatre Arts, Business Administration
          and many more.
        </Text>
      </View>

      <View style={styles.slide4}>
        <LottieView
          source={require("../onb_files/reading.json")}
          autoPlay
          style={{
            marginTop: -30,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#348B73",
            marginTop: 400,
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          Read Anywhere, Read Anytime.
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color: "black",
            marginTop: 10,
            textAlign: "center",
            letterSpacing: 2,
            lineHeight: 23,
          }}
        >
          Read from your home, church, shop etc
        </Text>
      </View>
      <View style={styles.slide5}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Read At Your Own Pace.
        </Text>
        <LottieView
          source={require("../onb_files/usingphone.json")}
          autoPlay
          style={{
            backgroundColor: "pink",
            height: 450,
            width: 100,
            marginTop: -20,
            alignSelf: "center",
          }}
        />

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate(WelcomeScreen)}
        >
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontWeight: "bold",
              top: "20%",
              fontSize: 20,
              color: "white",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "column",
    marginTop: 0,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "column",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3EE4B7",
  },
  slide5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    marginTop: 0,
    alignSelf: "center",
  },
  doneButton: {
    height: 45,
    backgroundColor: "black",
    borderRadius: 10,
    alignSelf: "center",
    borderRadius: 10,
    width: 200,
  },
});
