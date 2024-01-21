import React from 'react';
import { View, FlatList } from 'react-native';
import {cardDetails} from '../../demo/data';
import { SearchInput, ProductCard } from '../../components';
import { SafeAreaView } from "react-native-safe-area-context";

export const MenuScreen = ({}) => {

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
          navigation.navigate("DetailsScreen", { product });
        };
        return <ProductCard onPress={() => onProductPress(item)} {...item} />;
      };

    return (
        <SafeAreaView>
            <SearchInput/>
            <FlatList
            numColumns={2}
            data={cardDetails}
            renderItem={renderProductItem}
            keyExtractor={(item) => String(item?._id)}
            />
        </SafeAreaView>
    )
};