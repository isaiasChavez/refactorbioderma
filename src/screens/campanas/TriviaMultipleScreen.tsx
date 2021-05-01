import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
export interface LoginScreenProps {
  navigation: undefined;
}

const TabMultiplesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TabMultiplesScreen</Text>
      <Button
        title="Ir al siguiente"
        // onPress={() => navigation.navigate("TabMultiplesScreen")}
      />
    </View>
  );
};

export default TabMultiplesScreen;

const styles = StyleSheet.create({});
