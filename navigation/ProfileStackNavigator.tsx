import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import {  ProfileParamList, RootStackParamList } from "../types";
import Profile from "../src/screens/profiles/Profile";

const ProfileStack = createStackNavigator<ProfileParamList>();

export default function ProfileStackNavigator({
  navigation,
}: StackScreenProps<RootStackParamList, "Profile">) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      
    </ProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({});
