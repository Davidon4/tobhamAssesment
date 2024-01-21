import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: hp('30%'),
    margin: 14,
    borderRadius: 8,
    width: wp('40%')
  },
  contentSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    marginHorizontal: 10 
  },
  imageContainer:{
    marginTop: 30,
    alignItems:'center',
  },
  image:{
    height: 100,
    width: 100
  },
  heartContainer:{
    position: 'absolute',
    right: 10,
    top: 14,
  },
  name:{
    ...FONTS.black15Medium,
    fontWeight: '500',
  },
  amount: {
    ...FONTS.black15Medium,
    fontWeight: '500',
    color: 'red'
  }
});
