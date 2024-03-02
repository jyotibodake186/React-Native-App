import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const SignupScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (data) => {
    if (data.mobileNumber === "1234567890") {
      setErrorMessage("Mobile number already registered. Please log in.");
      return;
    }

    navigation.navigate("FirstOtpScreen", { mobileNumber: data.mobileNumber });
  };

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <Text style={styles.label}>I am a</Text>
      <View style={styles.radioContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TouchableOpacity
              style={[
                styles.radioButton,
                field.value === "male" && styles.selectedButton,
              ]}
              onPress={() => field.onChange("male")}
            >
              <Text style={styles.radioText}>Male</Text>
            </TouchableOpacity>
          )}
          name="gender"
          rules={{ required: "Please select your gender" }}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <TouchableOpacity
              style={[
                styles.radioButton,
                field.value === "female" && styles.selectedButton,
              ]}
              onPress={() => field.onChange("female")}
            >
              <Text style={styles.radioText}>Female</Text>
            </TouchableOpacity>
          )}
          name="gender"
          rules={{ required: "Please select your gender" }}
        />
      </View>

      {errors.gender && (
        <Text style={styles.errorText}>{errors.gender.message}</Text>
      )}
      <View>
        <Text style={styles.label}>Your full name</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.input, errors.fullName && styles.errorInput]}
              placeholder="Your full name"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="fullName"
          rules={{ required: "Please enter your full name" }}
        />
        {errors.fullName && (
          <Text style={styles.errorText}>{errors.fullName.message}</Text>
        )}
      </View>

      <Text style={styles.label}>Your mobile number</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={[styles.input, errors.mobileNumber && styles.errorInput]}
            keyboardType="phone-pad"
            placeholder="Your mobile number"
            onChangeText={field.onChange}
            value={field.value}
            maxLength={10}
          />
        )}
        name="mobileNumber"
        rules={{
          required: "Please enter your mobile number",
          pattern: {
            value: /^[0-9]*$/,
            message: "Please enter a valid mobile number",
          },
          minLength: {
            value: 10,
            message: "Mobile number must be 10 digits",
          },
          maxLength: {
            value: 10,
            message: "Mobile number must be 10 digits",
          },
        }}
      />
      {errors.mobileNumber && (
        <Text style={styles.errorText}>{errors.mobileNumber.message}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(handleSignup)}
        style={styles.signupButton}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <View style={styles.messageBox}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      ) : null}

      {errors.gender || errors.fullName || errors.mobileNumber ? (
        <View style={styles.messageBox}>
          <Text style={styles.errorMessageText}>
            Please fix the errors above
          </Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginLink}>
          Already on ByzWiz? <Text style={{ color: "#9370db" }}>Log in</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By Signing up, you agree to our{" "}
          <Text style={styles.blueText}>Terms of Service</Text> and{" "}
          <Text style={styles.blueText}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  radioContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  radioButton: {
    borderWidth: 1,
    width: "48%",
    borderColor: "#9370db",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: "#ccc",
  },
  radioText: {
    fontSize: 16,
    color: "#9370db",
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 30,
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: "#9370db",
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 100,
    height: 50,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    fontSize: 16,
    color: "#000",
    marginBottom: 40,
    textAlign: "center",
  },
  termsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  termsText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  blueText: {
    color: "#9370db",
    textDecorationLine: "underline",
  },
  messageBox: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  errorMessageText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SignupScreen;
