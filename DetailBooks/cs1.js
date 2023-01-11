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

import * as Animatable from "react-native-animatable";

export default function Cs1() {
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
            Chapter 1 : Introduction to Data Analysis using Python
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.texty}>
            What Is Data Analysis? Although many groups, organizations, and
            experts have different ways to approach data analysis, most of them
            can be distilled into a one-size-fits-all definition. Data analysis
            is the process of cleaning, changing, and processing raw data, and
            extracting actionable, relevant information that helps businesses
            make informed decisions. The procedure helps reduce the risks
            inherent in decision-making by providing useful insights and
            statistics, often presented in charts, images, tables, and graphs. A
            simple example of data analysis can be seen whenever we take a
            decision in our daily lives by evaluating what has happened in the
            past or what will happen if we make that decision. Basically, this
            is the process of analyzing the past or future and making a decision
            based on that analysis. It’s not uncommon to hear the term “big
            data” brought up in discussions about data analysis. Data analysis
            plays a crucial role in processing big data into useful information.
            Neophyte data analysts who want to dig deeper by revisiting big data
            fundamentals should go back to the basic question, “What is data?”
          </Text>
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
              Why is Data Analysis So Important?
            </Text>
          </View>
          <Text style={styles.texty}>
            Here is a list of reasons why data analysis is such a crucial part
            of doing business today. Better Customer Targeting: You do not want
            to waste your businesss' precious time, resources, and money putting
            together advertising campaigns targeted at demographic groups that
            have little to no interest in the goods and services you offer. Data
            analysis helps you see where you should be focusing your advertising
            efforts. You Will Know Your Target Customers Better: Data analysis
            tracks how well your products and campaigns are performing within
            your target demographic. Through data analysis, your business can
            get a better idea of your target audiences' spending habits,
            disposable income, and most likely areas of interest. This data
            helps businesses set prices, determine the length of ad campaigns,
            and even help project the quantity of goods needed. Reduce
            Operational Costs: Data analysis shows you which areas in your
            business need more resources and money, and which areas are not
            producing and thus should be scaled back or eliminated outright.
            Better Problem-Solving Methods: Informed decisions are more likely
            to be successful decisions. Data provides businesses with
            information. You can see where this progression is leading. Data
            analysis helps businesses make the right choices and avoid costly
            pitfalls. You Get More Accurate Data: If you want to make informed
            decisions, you need data, but there is more to it. The data in
            question must be accurate. Data analysis helps businesses acquire
            relevant, accurate information, suitable for developing future
            marketing strategies, business plans, and realigning the companys'
            vision or mission.
          </Text>
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
              What is the Data Analysis Process?
            </Text>
          </View>
          <Text style={styles.texty}>
            Answering the question “what is data analysis” is only the first
            step. Now we will look at how it is performed. The data analysis
            process, or alternately, data analysis steps, involves gathering all
            the information, processing it, exploring the data, and using it to
            find patterns and other insights. The process consists of: Data
            Requirement Gathering: Ask yourself why you are doing this analysis,
            what type of data analysis you want to use, and what data you are
            planning on analyzing. Data Collection: Guided by the requirements
            you have identified, it is time to collect the data from your
            sources. Sources include case studies, surveys, interviews,
            questionnaires, direct observation, and focus groups. Make sure to
            organize the collected data for analysis. Data Cleaning: Not all of
            the data you collect will be useful, so it is time to clean it up.
            This process is where you remove white spaces, duplicate records,
            and basic errors. Data cleaning is mandatory before sending the
            information on for analysis. Data Analysis: Here is where you use
            data analysis software and other tools to help you interpret and
            understand the data and arrive at conclusions. Data analysis tools
            include Excel, Python, R, Looker, Rapid Miner, Chartio, Metabase,
            Redash, and Microsoft Power BI. Data Interpretation: Now that you
            have your results, you need to interpret them and come up with the
            best courses of action, based on your findings. Data Visualization:
            Data visualization is a fancy way of saying, “graphically show your
            information in a way that people can read and understand it.” You
            can use charts, graphs, maps, bullet points, or a host of other
            methods. Visualization helps you derive valuable insights by helping
            you compare datasets and observe relationships.
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
    marginTop: 10,
    backgroundColor: "teal",
    height: 100,
  },
  texty: {
    // flexWrap: "wrap",
    fontSize: 16,
    marginLeft: 2,
  },
});
