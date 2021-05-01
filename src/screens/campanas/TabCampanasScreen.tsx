import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
export interface LoginScreenProps {
  navigation: undefined;
}

const TabCampanasScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TabCampanasScreen</Text>
      <Button
        title="Ir a TriviasScreen"
        onPress={() => navigation.navigate("TriviasScreen")}
      />
      <Button
        title="Ir a perfil"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default TabCampanasScreen;

const styles = StyleSheet.create({});
