import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ShoppingBag } from '../../../assets/svg';
import {styles} from './styles'

export const AppButton = ({icon, title, style, onPress}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
         style={[styles.container, style]}>
            {
                icon ? (
                <ShoppingBag/> 
                ) : null
            }
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}