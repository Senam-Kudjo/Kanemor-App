import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";

export default function Favourites() {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <Animatable.View animation={"bounceInDown"} duration={2200}>
          <Text style={{ fontSize: 18, fontWeight: "700", letterSpacing: 3 }}>
            Favourited Books
          </Text>
        </Animatable.View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "15%",
    left: 20,
  },
});
