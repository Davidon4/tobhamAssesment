import React from "react";
import { View, Text, Pressable } from "react-native";
import { AppButton } from "../AppButton";
import { styles } from "./styles";
import { Image } from 'expo-image';
import { Heart } from "../../../assets/svg";

export const ProductCard = ({onPress, image, name, price}) => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.heartContainer} onPress={onPress}>
        <Heart/>
        </Pressable>
        <View style={styles.imageContainer}>
        <Image contentFit="contain" style={styles.image} source={image}/>
        </View>
        <View style={styles.contentSection}>
        <Text style={styles.name}>
          {name.length > 11 ? (
           <Text>{name.substring(0, 11) + '...' }</Text> 
             ) : (
             <Text>{name}</Text>
              )}
        </Text>
        <Text style={styles.amount}>{price}</Text>
        </View>
        <AppButton icon title='Add to cart'/>
    </View>
  );
};
