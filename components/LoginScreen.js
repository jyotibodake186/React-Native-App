import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate("DashboardScreen");
    } else {
      alert("invalid number!");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/image1.png")}
          style={styles.topImage}
        />
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.description}>
          India's First Home-to-Consumer Social Enterprise Platform
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>Proceed with</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
        />
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestion}>+91 1234567890</Text>
          <Text style={styles.suggestion}>+91 0987654321</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupTextBlack}>Don't have an account? </Text>
          <TouchableOpacity onPress={navigateToSignup}>
            <Text style={styles.signupTextBlue}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  topContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  topImage: {
    width: 350,
    height: 300,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 10,
  },
  description: {
    marginBottom: 5,
    lineHeight: 25,
    textAlign: "center",
    color: "#9370db",
    fontSize: 15,
  },
  content: {
    width: "100%",
  },
  placeholder: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    borderRadius: 5,
  },
  suggestionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  suggestion: {
    width: "48%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 20,
    textAlign: "center",
  },
  bottomContainer: {
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#9370db",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupTextBlack: {
    fontSize: 16,
    color: "#000",
  },
  signupTextBlue: {
    fontSize: 16,
    color: "#00f",
  },
});

export default LoginScreen;
