import * as Font from "expo-font";

export async function loadFonts() {
  return (
  await Font.loadAsync({
    PoppinsBlack: require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsLight: require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
    PoppinsItalic: require("../../assets/fonts/Poppins/Poppins-Italic.ttf"),
    PoppinsMedium: require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  })
  )
}