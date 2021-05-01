import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
export interface LoginScreenProps {
  navigation: undefined;
}

const TriviasScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TriviasScreen</Text>
      <Button
        title="Ir a primera TriviaMultipleScreen"
        onPress={() => navigation.navigate("TriviaMultipleScreen")}
      />
    </View>
  );
};

export default TriviasScreen;

const styles = StyleSheet.create({});
