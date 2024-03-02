import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToSignup = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.screenContainer}>
      <Image source={require("../assets/image1.png")} style={styles.topImage} />
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Text style={styles.description}>
        India's First Home-to-Consumer Social Enterprise Platform
      </Text>

      <AppButton
        title="Log In"
        backgroundColor="#9370db"
        textColor="#fff"
        onPress={navigateToLogin}
      />
      <AppButton
        title="Sign Up"
        backgroundColor="#fff"
        borderColor="#9370db"
        textColor="#9370db"
        onPress={navigateToSignup}
      />
    </View>
  );
};

const AppButton = ({
  onPress,
  title,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  const buttonStyles = [styles.appButtonContainer];
  const textStyles = [styles.appButtonText];

  if (backgroundColor) {
    buttonStyles.push({ backgroundColor });
  }

  if (borderColor) {
    buttonStyles.push({ borderColor, borderWidth: 2 });
  }

  if (textColor) {
    textStyles.push({ color: textColor });
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  topImage: {
    width: 350,
    height: 300,
    marginBottom: 40,
  },
  logo: {
    width: 250,
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  description: {
    marginBottom: 55,
    lineHeight: 30,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#9370db",
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 350,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});

export default HomeScreen;
