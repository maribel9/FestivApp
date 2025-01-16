import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1, // Flex para adaptarse a la pantalla
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  logoContainer: {
    width: 230,   
    height: 250,  
    marginBottom: 8,  
  },
  logoIcon: {
    width: "100%",  
    height: "100%", 
    resizeMode: "contain", 
  },
  signUpTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#1f1f1f",
    marginBottom: 20,  
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
    flexDirection: "row", 
    alignItems: "center", 
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
  marginTop: 30, // Reduce el margen superior
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
// Estilo de login 
scrollContainer: {
  flexGrow: 1, // Asegura que el contenido ocupe toda la pantalla
  backgroundColor: "#fff",
  paddingBottom: 20, // Agrega algo de espacio en la parte inferior
},
mainContainer: {
  flex: 1,
  alignItems: "center",
  paddingTop: 50,
},
loginMainContainer: {
  flex: 1, // Flex para adaptarse a la pantalla
  backgroundColor: "#fff",
  alignItems: "center",
  paddingTop: 20,  // Ajusta este valor para mover todo hacia arriba (menos paddingTop mueve más hacia arriba)
},

loginLogoContainer: {
  width: 150,  // Ajusta el ancho según tus necesidades
  height: 150, // Ajusta la altura según tus necesidades
  marginBottom: 8,  // Espacio inferior para separar el logo del siguiente contenido
  marginTop: -50,  // Subir el logo más hacia arriba (ajustalo según lo que necesites)
  justifyContent: "center", // Asegura que el contenido esté centrado verticalmente
  alignItems: "center", // Centra el contenido horizontalmente
},

loginLogoIcon: {
  width: "100%",  // Asegura que la imagen ocupe todo el ancho de su contenedor
  height: "100%", // Asegura que la imagen ocupe toda la altura de su contenedor
  resizeMode: "contain",  // Mantiene la proporción de la imagen sin distorsionarla
},

loginTitle: {
  fontSize: 30,
  fontWeight: "600",
  marginTop: -20,  // Subir el título también un poco más (ajustalo según lo que necesites)
  marginLeft: 24,
  color: "#1f1f1f",
},
loginInputContainer: {
  width: 340,
  height: 50,
  borderRadius: 36,
  borderWidth: 1,
  borderColor: "#e9e9e9",
  marginTop: 18,
  marginLeft: 24,
  position: "relative",
  flexDirection: "row", 
  alignItems: "center", 
  paddingHorizontal: 40,
},

loginTextInput: {
  flex: 1,
  height: 40,
  fontSize: 16,
  color: "#000",
},

loginInputIcon: {
  position: "absolute",
  top: 14,
  left: 18,
  width: 22,
  height: 22,
},

loginDividerContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 25,
  width: 403,
  height: 24,
},

loginDivider: {
  width: 122,
  height: 1,
  backgroundColor: "#e8e8e8",
},

loginOrText: {
  fontSize: 16,
  color: "#000",
},

loginAppleButton: {
  width: 340,
  height: 54,
  backgroundColor: "#1f1f1f",
  borderRadius: 36,
  marginTop: 18,
  marginLeft: 24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
},

loginFacebookButton: {
  width: 340,
  height: 54,
  backgroundColor: "#3b5896",
  borderRadius: 36,
  marginTop: 15,
  marginLeft: 24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
},

loginGoogleButton: {
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

loginButtonIcon: {
  width: 22,
  height: 22,
  marginRight: 12,
},

loginButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "500",
},

loginGoogleButtonText: {
  color: "#000",
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
