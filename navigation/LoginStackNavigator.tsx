import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginParamList, RootStackParamList } from "../types";
import Login from "../src/screens/login/Login";
import ResetPasswordScreen from "../src/screens/login/ResetPasswordScreen";

const LoginStack = createStackNavigator<LoginParamList>();

export default function LoginStackNavigator({
  navigation,
}: StackScreenProps<RootStackParamList, "Login">) {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={Login}
      />
      <LoginStack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#707070",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      />
    </LoginStack.Navigator>
  );
}

const styles = StyleSheet.create({});
