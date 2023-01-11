import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import * as Animatable from "react-native-animatable";

export default function CsBooks({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}></View>
      <View>
        {/* SEARCHHHHH */}
        <TouchableOpacity style={styles.searchButton}>
          <EvilIcons
            name="search"
            color="black"
            size={40}
            style={{ alignSelf: "flex-end", textAlignVertical: "center" }}
          />
          <TextInput
            placeholder="search for book ..."
            placeholderTextColor="black"
            style={{
              top: "-68%",
              left: "-25%",
              textAlignVertical: "center",
              fontSize: 17,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* 1ST BOOK */}
        <Animatable.View
          animation={"bounceInDown"}
          duration={2000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs1.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Python for Dummies.</Text>
              <Text style={styles.subText}> Author : Yaaro Nambandi </Text>
              <Text style={styles.subText}> Pages : 219 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 2ND BOOK */}
        <Animatable.View
          animation={"bounceInDown"}
          duration={3000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs2.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Machine Learning Java.</Text>
              <Text style={styles.subText}> Author : Jake Duhna Aagbo </Text>
              <Text style={styles.subText}> Pages : 335 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 3RD BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={4000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs3.png")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Computer Hardware</Text>
              <Text style={styles.subText}> Author : Bra Jon</Text>
              <Text style={styles.subText}> Pages : 506 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 4th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs4.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Penetrating Testing ,V2.</Text>
              <Text style={styles.subText}> Author : Dr. Sylvia Nketiah</Text>
              <Text style={styles.subText}> Pages : 78 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 5th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/da.png")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Data Analysis Beginners</Text>
              <Text style={styles.subText}> Author : Reuben Ayivor</Text>
              <Text style={styles.subText}> Pages : 404 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 6th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs6.webp")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Mobile UI Tutorials.</Text>
              <Text style={styles.subText}> Author : Dr. Beatrice Addison</Text>
              <Text style={styles.subText}> Pages : 290 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 7th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs7.png")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
              onPress={() => navigation.navigate(Cs1)}
            >
              <Text style={styles.mainText}> Game Dev. (Unity)</Text>
              <Text style={styles.subText}> Author : Dr. Angel Alao.</Text>
              <Text style={styles.subText}> Pages : 228 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 8th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Cs1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              <Text style={styles.mainText}> Computing Careers</Text>
              <Text style={styles.subText}> Author : Dr. Mikel Arteta</Text>
              <Text style={styles.subText}> Pages : 367 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 9th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs5.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Cs1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 5,
              }}
            >
              <Text style={styles.mainText}> Computational Algorithms</Text>
              <Text style={styles.subText}> Author : Dr. Terrah Black</Text>
              <Text style={styles.subText}> Pages : 109 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 10th BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs8.webp")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Cs1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              <Text style={styles.mainText}> Multimedia Fundamentals</Text>
              <Text style={styles.subText}> Author : Dr. Aziz Abdullah</Text>
              <Text style={styles.subText}> Pages : 208 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
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
    marginTop: 0,
    left: 20,
    backgroundColor: "white",
  },
  searchButton: {
    height: 42,
    width: "90%",
    alignContent: "center",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#E8E8E8",
    alignSelf: "center",
  },
  bookImages: {
    height: 120,
    width: 140,
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 15,
  },
  bookCards: {
    height: 120,
    width: 220,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 20,
    borderColor: "black",
    borderLeftWidth: 0,
    borderWidth: 0.5,
    flexWrap: "wrap",
  },
  subText: {
    marginTop: 8,
    letterSpacing: 1,
    color: "grey",
  },
  mainText: {
    marginTop: -5,
    fontWeight: "500",
    letterSpacing: 0.6,
    fontSize: 16,
  },
});
