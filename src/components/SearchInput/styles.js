import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    margin: 14,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: -45,
    width: wp('88%')
  },
  input:{
    paddingHorizontal: 15,
    // flex: 1,
  },
  searchIcon:{
    marginLeft: 40
  }
});
