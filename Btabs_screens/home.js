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
import Cs1 from "../DetailBooks/cs1";
import DetailsScreen from "../DetailsScreen";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "black" }}>
            All You Can
          </Text>
          <Text
            style={{
              fontSize: 26,
              color: "teal",
              fontWeight: "bold",
              letterSpacing: 6,
              paddingTop: 2,
            }}
          >
            KANEMOR
          </Text>
        </View>
      </View>

      <View>
        {/* SEARCHHHHH */}
        <TouchableOpacity style={styles.searchButton}>
          <EvilIcons
            name="search"
            color="grey"
            size={40}
            style={{ alignSelf: "flex-end", textAlignVertical: "center" }}
          />
          <TextInput
            placeholder="search for book ..."
            placeholderTextColor="grey"
            style={{
              top: "-68%",
              left: "-25%",
              textAlignVertical: "center",
              fontSize: 17,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 25,
            fontWeight: "bold",
            left: "5%",
            color: "black",
            marginBottom: 5,
          }}
        >
          Popular Authors and Books (Top #10)
        </Text>
      </View>

      {/* PROFILE SCREEN */}
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal>
          <TouchableOpacity style={{ padding: 10, alignItems: "center" }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/augy.jpg")}
            />
            <Text style={styles.profileText}> Dr. Augy</Text>
            <Text style={styles.profileText}> Ayehsco</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/au1.jpg")}
            />
            <Text style={styles.profileText}> Dr. Eric</Text>
            <Text style={styles.profileText}> Blay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/au2.jpg")}
            />
            <Text style={styles.profileText}> Jennifer</Text>
            <Text style={styles.profileText}> Hedgings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/au3.jpg")}
            />
            <Text style={styles.profileText}> Koonie</Text>
            <Text style={styles.profileText}> Boawab</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/au4.jpg")}
            />
            <Text style={styles.profileText}> Steven</Text>
            <Text style={styles.profileText}> Dabodabo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/au5.jpg")}
            />
            <Text style={styles.profileText}> Dr. Ronald</Text>
            <Text style={styles.profileText}> Akoto </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              style={styles.profileImages}
              source={require("../assets/da.png")}
            />
            <Text style={styles.profileText}> Enoch</Text>
            <Text style={styles.profileText}> Peprah</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* END OF PROFILE SCREEN */}

      <ScrollView>
        {/* 1ST BOOK */}
        <Animatable.View
          animation={"bounceInUp"}
          duration={5000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/da.png")}
          />
          <TouchableOpacity
            style={styles.bookCards}
            onPress={() => navigation.navigate(DetailsScreen)}
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
              <Text style={styles.mainText}> Data Analysis for Beginners</Text>
              <Text style={styles.subText}> Author : Dr. Derriq Wujangi</Text>
              <Text style={styles.subText}> Pages : 404 </Text>
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
            source={require("../assets/ce.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 5,
              }}
            >
              <Text style={styles.mainText}> Intro. to Engineering</Text>
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
            source={require("../assets/ha.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 5,
              }}
            >
              <Text style={styles.mainText}> Human Anatomy & More</Text>
              <Text style={styles.subText}> Author : Dr. Eric Blay </Text>
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
            source={require("../assets/ta.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
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
              <Text style={styles.mainText}> The Art of Theatre Art</Text>
              <Text style={styles.subText}> Author : Bernd Leno</Text>
              <Text style={styles.subText}> Pages : 78 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        {/* 5th BOOK */}
        <Animatable.View
          animation={"bounceInDown"}
          duration={2000}
          style={{ flexDirection: "row" }}
        >
          <Image
            style={styles.bookImages}
            source={require("../assets/cs.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
            <View
              style={{
                flexDirection: "column",
                top: "10%",
                marginTop: 10,
                marginLeft: 5,
              }}
            >
              <Text style={styles.mainText}> Computer Science Intro.</Text>
              <Text style={styles.subText}> Author : C.S French </Text>
              <Text style={styles.subText}> Pages : 219 </Text>
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
            source={require("../assets/hr.jpg")}
          />
          <TouchableOpacity style={styles.bookCards}>
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
              <Text style={styles.mainText}> Human Resource Guide</Text>
              <Text style={styles.subText}> Author : Dr. Gabriel Jesus</Text>
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
            source={require("../assets/fi.png")}
          />
          <TouchableOpacity style={styles.bookCards}>
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
              <Text style={styles.mainText}> SME Finance</Text>
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
            source={require("../assets/ec.png")}
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
            >
              <Text style={styles.mainText}> Day-to-Day Economics</Text>
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
            source={require("../assets/en.jpeg")}
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
            >
              <Text style={styles.mainText}> Enterpreneurship Dev.</Text>
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
            source={require("../assets/ps.png")}
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
            >
              <Text style={styles.mainText}> Intro. To Politics</Text>
              <Text style={styles.subText}> Author : Dr. Alexis Sanchez</Text>
              <Text style={styles.subText}> Pages : 208 </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>

        <View style={{ height: 50 }}></View>
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
    marginTop: 30,
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
    width: 215,
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
    letterSpacing: 0.7,
    fontSize: 14,
  },
  profileImages: {
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  profileText: {
    fontSize: 12,
    fontWeight: "bold",
    flexWrap: "wrap",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
  },
  profilepadding: {
    marginLeft: 10,
  },
});
