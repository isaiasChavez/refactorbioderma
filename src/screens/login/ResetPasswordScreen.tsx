import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Reset</Text>
      <Button title="Go to init" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
