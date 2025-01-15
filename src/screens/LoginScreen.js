import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import MainStyles from "../styles/MainStyles"; // Ajusta la ruta según la nueva ubicación

export default function LoginScreen() {
  return (
    <View style={MainStyles.mainContainer}>
      <View style={MainStyles.logoContainer} />
      <Text style={MainStyles.title}>Sign in</Text>

      {/* Email Input */}
      <View style={MainStyles.inputContainer}>
        <TextInput
          style={MainStyles.textInput}
          placeholder="Enter e-mail address"
          placeholderTextColor="#adadad"
        />
        <Image
          source={require("../assets/images/mail-icon.png")}
          style={MainStyles.inputIcon}
        />
      </View>

      {/* Divider */}
      <View style={MainStyles.dividerContainer}>
        <View style={MainStyles.divider} />
        <Text style={MainStyles.orText}>Or continue with</Text>
        <View style={MainStyles.divider} />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={MainStyles.appleButton}>
        <Image
          source={require("../assets/images/apple-icon.png")}
          style={MainStyles.buttonIcon}
        />
        <Text style={MainStyles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.facebookButton}>
        <Image
          source={require("../assets/images/facebook-icon.png")}
          style={MainStyles.buttonIcon}
        />
        <Text style={MainStyles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.googleButton}>
        <Image
          source={require("../assets/images/google-icon.png")}
          style={MainStyles.buttonIcon}
        />
        <Text style={MainStyles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.continueButton}>
        <Text style={MainStyles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
