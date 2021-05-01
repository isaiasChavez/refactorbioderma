import * as React from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { loginstyles } from "../../styles/login.styles";
import { colors, Img } from "../../../types";
import Layout from "../../../constants/Layout";
import { TextInput } from "react-native-gesture-handler";
export interface LoginScreenProps {
  navigation: undefined;
}

const Login = ({ navigation }) => {
  return (
    <View>
      <View>
        <Image
          style={[
            {
              width: "90%",
              alignSelf: "center",
            },
          ]}
          source={Img.logo}
          resizeMode="contain"
        />

        <TextInput
          style={[
            {
              //fontFamily:'d_din_condensed_bold'
              marginLeft: Layout.window.width * 0.15,
              marginRight: Layout.window.width * 0.15,
            },
          ]}
          placeholder="Usuario"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={[
            {
              marginLeft: Layout.window.width * 0.15,
              marginRight: Layout.window.width * 0.15,
            },
          ]}
          returnKeyType="go"
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>

      <View>
        {
          <TouchableOpacity
          // onPress={this.submit.bind(this)}
          >
            <Button
              title="Entrar"
              onPress={() => navigation.navigate("Root")}
            />
            {
              // this.state.isLoading &&
              <ActivityIndicator size="small" color={colors.WHITE} />
            }
          </TouchableOpacity>
        }
      </View>
      <Button
        title="Resetear password"
        onPress={() => navigation.navigate("ResetPasswordScreen")}
      />

      <View></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
