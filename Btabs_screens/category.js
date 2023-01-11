import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import AgricultureBooks from "../subCategoryScreens/agricultureBooks";
import CsBooks from "../subCategoryScreens/csBooks";

export default function Category({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: 50, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            left: 20,
            letterSpacing: 2,
          }}
        >
          Categories
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Animatable.View
            animation={"bounceInLeft"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(AgricultureBooks)}
            >
              <Text style={styles.text}>Agriculture</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInRight"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Animal Science</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInLeft"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(CsBooks)}
            >
              <Text style={styles.text}>Computer Science</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInRight"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Engineering</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInLeft"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Human Science</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInRight"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Linguistics</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInLeft"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Mathematical Science</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInRight"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Sports Science</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInRight"}
            duration={2200}
            style={styles.button}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Theatre Arts</Text>
            </TouchableOpacity>
          </Animatable.View>
          <View style={{ height: 150 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderColor: "white",
    height: 80,
    width: 340,
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 2,
    flexDirection: "row",
    borderRadius: 10,
    alignSelf: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
});
