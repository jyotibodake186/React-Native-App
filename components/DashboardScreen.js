import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      {/* Navbar section */}
      <View style={styles.navbar}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <Text style={styles.hometext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Images section */}
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {/* Add your images here */}
        <Image source={require("../assets/image2.png")} style={styles.image} />
        <Image source={require("../assets/image3.png")} style={styles.image} />
        <Image source={require("../assets/image4.png")} style={styles.image} />
        <Image source={require("../assets/image5.png")} style={styles.image} />
        <Image source={require("../assets/image6.png")} style={styles.image} />
        <Image source={require("../assets/image7.png")} style={styles.image} />
        <Image source={require("../assets/image8.png")} style={styles.image} />
        <Image source={require("../assets/image9.png")} style={styles.image} />
        <Image source={require("../assets/image10.png")} style={styles.image} />
        <Image source={require("../assets/image11.png")} style={styles.image} />
        <Image source={require("../assets/image12.png")} style={styles.image} />
        <Image source={require("../assets/image14.png")} style={styles.image} />
        <Image source={require("../assets/image15.png")} style={styles.image} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 40,
  },
  logoutText: {
    color: "#9370db",
    fontSize: 16,
    marginRight: 10,
  },
  hometext: {
    color: "#9370db",
    fontSize: 16,
    marginLeft: 140,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 380,
    height: 200,
    margin: 2,
  },
});

export default DashboardScreen;
