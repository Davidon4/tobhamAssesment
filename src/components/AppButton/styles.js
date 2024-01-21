import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 8,
        marginHorizontal: 8
    },
    title: {
        color: COLORS.white,
        fontWeight: '400',
        textAlign: 'center',
        marginLeft: 10,
        ...FONTS.white12Medium
    }
})