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
import Ab1 from "../DetailBooks/ab1";

export default function AgricultureBooks({ navigation }) {
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
            source={require("../assets/ag1.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Introduction to Horticulture</Text>
              <Text style={styles.subText}> Author : Dr. Senam Humado </Text>
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
            source={require("../assets/ag6.webp")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Cattle Management</Text>
              <Text style={styles.subText}> Author : F.K Owusu Ansah </Text>
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
            source={require("../assets/ag3.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Ecology today </Text>
              <Text style={styles.subText}> Author : Augustine Ayeh </Text>
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
            source={require("../assets/ag4.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Farming, the Past & Future.</Text>
              <Text style={styles.subText}> Author : Bernd Leno</Text>
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
            source={require("../assets/ag9.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Plant Pathology</Text>
              <Text style={styles.subText}> Dr. Neequaye Niikoi</Text>
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
            source={require("../assets/ag2.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Soil Agriculture</Text>
              <Text style={styles.subText}> Author : Priscilla Baddie</Text>
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
            source={require("../assets/ag8.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Normadic Agriculture</Text>
              <Text style={styles.subText}> Author : Dr. T. Tomiyasu</Text>
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
            source={require("../assets/ag9.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}>
                {" "}
                Title : Agriculture & Economics
              </Text>
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
            source={require("../assets/ag3.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Agriculture Enterpreneurship</Text>
              <Text style={styles.subText}> Author : Thomas Partey</Text>
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
            source={require("../assets/ag8.jpg")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(Ab1)}
          >
            <View
              style={{
                flexDirection: "column",
                // right: "128%",
                top: "10%",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              <Text style={styles.mainText}> Investing in Agriculture</Text>
              <Text style={styles.subText}> Author : Dr. Alexis Sanchez</Text>
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
    marginTop: 10,
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
    backgroundColor: "#ddd",
    alignSelf: "center",
  },
  bookImages: {
    height: 120,
    width: 150,
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
    borderColor: "#ddd",
    borderWidth: 1.5,
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
    letterSpacing: 0.5,
    fontSize: 16,
  },
});
