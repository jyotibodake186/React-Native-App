import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FirstOtpScreen = ({ route, navigation }) => {
  const mobileNumber = route?.params?.mobileNumber || "";
  const [generatedOtp, setGeneratedOtp] = useState(generateRandomOtp());
  const [displayedOtp, setDisplayedOtp] = useState("");
  const [timer, setTimer] = useState(5);
  const [resendText, setResendText] = useState("Didn't get the OTP? Retry in 20s");

  function generateRandomOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setDisplayedOtp(generatedOtp);
          setResendText("Resend OTP");
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 300);

    return interval;
  };

  useEffect(() => {
    const interval = startTimer();

    return () => clearInterval(interval);
  }, [generatedOtp]);

  const handleResendOTP = () => {
    if (timer === 0) {
      setGeneratedOtp(generateRandomOtp());
      setTimer(3); 
      setResendText("Retrying...");
      setTimeout(() => {
        setResendText("Retry in 20s");
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subHeading}>
        {"\n"}Enter the OTP sent to{" "}
        <Text style={{ fontWeight: "bold" }}>{mobileNumber}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {displayedOtp.split("").map((digit, index) => (
          <View
            key={index}
            style={[styles.otpDigitContainer, { marginRight: 3.77953 }]}
          >
            <Text style={styles.otpDigit}>{digit}</Text>
          </View>
        ))}
      </View>
      <View style={styles.lineContainer} />
      <TouchableOpacity
        style={[
          styles.verifyButton,
          { backgroundColor: timer >= 0 ? "#ccc" : "#9370db" },
        ]}
        onPress={() => {
          if (timer !== 0) {
            navigation.navigate("HomeScreen");
          }
        }}
        disabled={timer === 0}
      >
        <Text style={styles.verifyButtonText}>Verify and Proceed</Text>
      </TouchableOpacity>

      <Text
        style={styles.retryText}
        onPress={handleResendOTP}
      >
        {resendText}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.logInText}
      >
        <Text style={styles.logInBlackText}>Already on ByzWiz?</Text>
        <Text style={styles.logInPurpleText}> Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subHeading: {
    marginTop: 30,
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  otpDigitContainer: {
    flex: 1,
    alignItems: "center",
  },
  otpDigit: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lineContainer: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    marginBottom: 10,
  },
  verifyButton: {
    borderRadius: 7,
    width: 350,
    paddingVertical: 12,
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  retryText: {
    color: "#9370db",
    marginTop: 60,
  },
  logInText: {
    flexDirection: "row",
    marginTop: 300,
  },
  logInBlackText: {
    color: "#000",
  },
  logInPurpleText: {
    color: "#9370db",
  },
});

export default FirstOtpScreen;
