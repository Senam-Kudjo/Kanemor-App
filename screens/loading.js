import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import TabNavigator from "../TabNavigator";

export default function Loading({ navigation }) {
  setTimeout(() => {
    navigation.navigate(TabNavigator);
  }, 3000);
  return (
    <View style={styles.content}>
      <LottieView
        source={require("../onb_files/bookloading.json")}
        autoPlay
        style={{
          backgroundColor: "white",
          height: 500,
          width: 400,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "column",
  },
});
