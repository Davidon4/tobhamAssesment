import React from "react";
import { View, TextInput } from "react-native";
import { Search } from "../../../assets/svg";
import { styles } from "./styles";

export const SearchInput = ({}) => {
  return (
    <View style={styles.container}>
      <Search style={styles.searchIcon}/>
      <TextInput
      placeholder="Search"
      style={styles.input}
      />
    </View>
  );
};
