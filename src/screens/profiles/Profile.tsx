import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
export interface LoginScreenProps {
  navigation: undefined;
}

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Ir a primera algo"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
