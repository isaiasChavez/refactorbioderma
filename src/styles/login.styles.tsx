import { Dimensions, Platform } from "react-native";
import Layout from "../../constants/Layout";
import { colors } from "../../types";

export const loginstyles = {
  logo: {
    width: "80%",
    height: "60%",
  },
  loginName: {
    justifyContent: "center",
    borderBottomColor: colors.GRAY,
    borderBottomWidth: 2,
    height: Layout.window.width * 0.05,
    paddingVertical: 0,
    fontSize: colors.HEIGHT * 0.02,
  },
  buttonBlue: {
    flex: 0.5,
    backgroundColor: colors.BLUE_LIGHT,
    borderRadius: 10,
    width: "60%",
    height: "10%",
    marginLeft: "20%",
    justifyContent: "center",
  },

  submitText: {
    color: colors.BLUE_MEDIUM,
    textAlign: "center",
    fontSize: Layout.window.height * 0.02,
    marginTop: "3%",
  },
  error: {
    backgroundColor: colors.SKIN_MEDIUM,
    borderColor: colors.SKIN,
    borderWidth: 1,
    marginLeft: "20%",
    marginRight: "20%",
    borderRadius: 10,
  },

  errorText: {
    fontSize: Layout.window.width * 0.03,
    marginBottom: "5%",
  },

  forgetText: {
    color: colors.BLUE_LOGIN,
    textAlign: "center",
    fontSize: Layout.window.height * 0.02,
    marginTop: "5%",
  },
};
