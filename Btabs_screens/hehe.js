import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

export default function Hehe({ navigation }) {
  const [businesses, setBusiness] = useState([
    {
      id: "1",
      name: "Adepa Food Services",
      author: "Jean Aka Nelson Hall ",
      image: require("../assets/en.jpeg"),
    },
    {
      id: "2",
      name: "B-15 Clothing Line",
      author: "Pent Block A",
      image: require("../assets/ta.jpg"),
    },
    {
      id: "3",
      name: "Rangers Sneakers Hub",
      author: "Sarbah Annex A",
      image: require("../assets/cs.jpg"),
    },
    {
      id: "4",
      name: "XnX Electronics",
      author: "TF",
      image: require("../assets/ec.png"),
    },
  ]);

  // Cards for Business View

  const Card = ({ business, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", business)}
      >
        <View style={{ ...styles.card }}>
          <View style={{ ...styles.cardOverLay, opacity: 0 }}></View>
          <Image style={styles.cardImage} source={business.image} />

          {/* Card Details */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.cardDetails}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {business.name}
              </Text>
              <Text style={{ color: "grey", fontSize: 11 }}>
                {business.author}
              </Text>
            </View>

            {/* Starring */}
            <View
              style={{
                flexDirection: "row-reverse",
                paddingRight: 20,
                marginTop: -25,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="star" size={15} color="orange" />
                <MaterialIcons name="star" size={15} color="orange" />
                <MaterialIcons name="star" size={15} color="orange" />
                <MaterialIcons name="star" size={15} color="orange" />
                <MaterialIcons name="star" size={15} color="orange" />
              </View>
            </View>

            <Text
              style={{
                fontSize: 10,
                paddingRight: 15,
                marginTop: -16,
                top: -5,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              {business.review}
              Reviews
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text style={{ fontSize: 33, fontWeight: "bold", color: "#009387" }}>
            Campus Mall
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.searchContainer}>
              <AntDesign name="search1" size={20} style={{ marginLeft: 20 }} />
              <TextInput placeholder="Search" style={styles.input} />
            </View>

            <View style={styles.sortBtn}>
              <MaterialIcons name="tune" color={"white"} size={25} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  searchContainer: {
    height: 35,
    backgroundColor: "#ddd",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  sortBtn: {
    backgroundColor: "black",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  categoryView: {
    paddingBottom: 10,
    minHeight: 60,
    maxHeight: 80,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },

  // Main Card
  card: {
    height: 200,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },

  // Images
  cardImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  //Details Of Card

  cardDetails: {
    height: 85,
    borderRadius: 15,
    borderTopEndRadius: 1,
    borderTopLeftRadius: 1,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },

  cardDetails2: {
    height: 55,
    marginTop: 50,
    borderRadius: 15,
    borderTopEndRadius: 1,
    borderTopLeftRadius: 1,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },

  // the transparency
  cardOverLay: {
    height: 220,
    width: cardWidth,
    backgroundColor: "grey",
    position: "absolute",
    zIndex: 100,
    borderRadius: 15,
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "goldenrod",
    height: 650,
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 80,
    marginLeft: 40,
  },
});
