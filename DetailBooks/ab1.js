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

export default function Ab1() {
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <View style={styles.header}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              color: "white",
              textAlignVertical: "center",
            }}
          >
            {" "}
            Chapter 1
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.texty}>
            Agriculture helps to meet the basic needs of human and their
            civilization by providing food, clothing, shelters, medicine and
            recreation. Hence, agriculture is the most important enterprise in
            the world. It is a productive unit where the free gifts of nature
            namely land, light, air, temperature and rain water etc., are
            integrated into single primary unit indispensable for human beings.
            Secondary productive units namely animals including livestock, birds
            and insects, feed on these primary units and provide concentrated
            products such as meat, milk, wool, eggs, honey, silk and lac.
            Agriculture provides food, feed, fibre, fuel, furniture, raw
            materials and materials for and from factories; provides a free fare
            and fresh environment, abundant food for driving out famine; favours
            friendship by eliminating fights. Satisfactory agricultural
            production brings peace, prosperity, harmony, health and wealth to
            individuals of a nation by driving away distrust, discord and
            anarchy. It helps to elevate the community consisting of different
            castes and clauses, thus it leads to a better social, cultural,
            political and economical life. Agricultural development is
            multidirectional having galloping speed and rapid spread with
            respect to time and space. After green revolution, farmers started
            using improved cultural practices and agricultural inputs in
            intensive cropping systems with labourer intensive programmes to
            enhance the production potential per unit land, time and input. It
            provided suitable environment to all these improved genotypes to
            foster and manifest their yield potential in newer areas and
            seasons. Agriculture consists of growing plants and rearing animals
            in order to yield, produce and thus it helps to maintain a
            biological equilibrium in nature
          </Text>
          <Image
            source={require("../assets/ag2.jpg")}
            style={{
              height: 300,
              width: 380,
              marginTop: 20,
              alignSelf: "center",
            }}
          ></Image>
          <View style={styles.header}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
                textAlignVertical: "center",
              }}
            >
              {" "}
              Definition and Importance of Agriculture
            </Text>
          </View>
          <Text style={styles.texty}>
            Agriculture is defined as the art, the science and the business of
            producing crops and the livestock for economic purposes. As an art,
            it embraces knowledge of the way to perform the operations of the
            farm in a skillful manner. The skill is categorized as; Physical
            skill: It involves the ability and capacity to carry out the
            operation in an efficient way for e.g., handling of farm implements,
            animals etc., sowing of seeds, fertilizer and pesticides application
            etc. Mental skill: The farmer is able to take a decision based on
            experience, such as (i) time and method of ploughing, (ii) selection
            of crop and cropping system to suit soil and climate, (iii) adopting
            improved farm practices etc. As a science : It utilizes all modern
            technologies developed on scientific principles such as crop
            improvement/breeding, crop production, crop protection, economics
            etc., to maximize the yield and profit. For example, new crops and
            varieties developed by hybridization, transgenic crop varieties
            resistant to pests and diseases, hybrids in each crop, high
            fertilizer responsive varieties, water management, herbicides to
            control weeds, use of bio-control agents to combat pest and diseases
            etc. As the business : As long as agriculture is the way of life of
            the rural population, production is ultimately bound to consumption.
            But agriculture as a business aims at maximum net return through the
            management of land, labour, water and capital, employing the
            knowledge of various sciences for production of food, feed, fibre
            and fuel. In recent years, agriculture is commercialized to run as a
            business through mechanization
          </Text>
        </View>
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
    marginTop: 50,
    backgroundColor: "green",
    height: 100,
  },
  texty: {
    // flexWrap: "wrap",
    fontSize: 20,
    marginLeft: 2,
  },
});
