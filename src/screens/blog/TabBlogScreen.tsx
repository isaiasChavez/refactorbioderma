import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
export interface LoginScreenProps {
  navigation: undefined;
}

const Blog = ({ navigation }) => {
  return (
    <View>
      <Text>Blog</Text>
      <Button
        title="Ir al detalle"
        onPress={() => navigation.navigate("DetailBlogScreen")}
      />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
