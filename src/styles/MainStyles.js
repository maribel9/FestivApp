import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
  mainContainer: {
    width: 402,
    height: 870,
    backgroundColor: "#fff",
    marginHorizontal: "auto",
    overflow: "hidden",
  },
  logoContainer: {
    width: 28,
    height: 28,
    backgroundColor: "#ccc",
    marginTop: 74,
    marginLeft: 23,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 27,
    marginLeft: 24,
    color: "#1f1f1f",
  },
  inputContainer: {
    width: 340,
    height: 50,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    marginTop: 18,
    marginLeft: 24,
    position: "relative",
    flexDirection: "row", // Alineación horizontal
    alignItems: "center", // Centrar el ícono y el campo de texto
    paddingHorizontal: 40,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  inputIcon: {
    position: "absolute",
    top: 14,
    left: 18,
    width: 22,
    height: 22,
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 36,
    width: 403,
    height: 24,
  },
  divider: {
    width: 122,
    height: 1,
    backgroundColor: "#e8e8e8",
  },
  orText: {
    fontSize: 16,
    color: "#000",
  },
  appleButton: {
    width: 340,
    height: 54,
    backgroundColor: "#1f1f1f",
    borderRadius: 36,
    marginTop: 37,
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookButton: {
    width: 340,
    height: 54,
    backgroundColor: "#3b5896",
    borderRadius: 36,
    marginTop: 21,
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleButton: {
    width: 340,
    height: 54,
    backgroundColor: "#fff9f9",
    borderRadius: 36,
    marginTop: 18,
    marginLeft: 24,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  continueButton: {
    width: 340,
    height: 54,
    backgroundColor: "#0373f3",
    borderRadius: 36,
    marginTop: 150,
    marginLeft: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  continueSIButton: {
    width: 340,
    height: 54,
    backgroundColor: "#0373f3",
    borderRadius: 36,
    marginTop: 380,
    marginLeft: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  continueText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  // Estilos nuevos para SingInScreen
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 24,
  },
  termsText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
  termsLink: {
    color: "#0373f3",
    textDecorationLine: "underline",
  },
  signUpTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#1f1f1f",
    marginTop: 20,
    marginLeft: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    backgroundColor: "white",
    borderRadius: 3,
    marginLeft: 8,
  },
  checkboxSelected: {
    backgroundColor: "#0373f3",
  },  
});

export default MainStyles;
