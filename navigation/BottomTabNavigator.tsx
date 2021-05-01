import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../src/screens/TabOneScreen";
import TabCBScreen from "../src/screens/TabCBScreen";
import TabBlogScreen from "../src/screens/blog/TabBlogScreen";

import {
  BottomTabParamList,
  TabOneParamList,
  TabCBParamList,
  TabBGParamList,
  TabBlogParamList,
  TabCampanasParamList
} from "../types";
import DetailBlog from "../src/screens/blog/DetailBlog";
import TabCampanasScreen from "../src/screens/campanas/TabCampanasScreen";
import TriviasScreen from "../src/screens/campanas/TriviasScreen";
import TriviaMultipleScreen from "../src/screens/campanas/TriviaMultipleScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="TabBlog">
      <BottomTab.Screen
        name="TabTrivias"
        component={TabTriviasNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabCB"
        component={TabCBNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabBlog"
        component={TabBlogNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabCampanas"
        component={TabCampanasNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabTriviasStack = createStackNavigator<TabOneParamList>();

function TabTriviasNavigator() {
  return (
    <TabTriviasStack.Navigator>
      <TabTriviasStack.Screen
        name="TabTriviasScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Trivias", headerLeft: null }}
      />
    </TabTriviasStack.Navigator>
  );
}

const TabCBStack = createStackNavigator<TabCBParamList>();

function TabCBNavigator() {
  return (
    <TabCBStack.Navigator>
      <TabCBStack.Screen
        name="TabCBScreen"
        component={TabCBScreen}
        options={{ headerTitle: "Club bioderma", headerLeft: null }}
      />
    </TabCBStack.Navigator>
  );
}

const TabBlogStack = createStackNavigator<TabBlogParamList>();
function TabBlogNavigator() {
  return (
    <TabBlogStack.Navigator>
      <TabBlogStack.Screen
        name="TabBlogScreen"
        component={TabBlogScreen}
        options={{ headerTitle: "Blog", headerLeft: null }}
      />
      <TabBlogStack.Screen
        name="DetailBlogScreen"
        component={DetailBlog}
        options={{ headerTitle: "Detalle de blog" }}
      />
    </TabBlogStack.Navigator>
  );
}

const TabCampanasStack = createStackNavigator<TabCampanasParamList>();
function TabCampanasNavigator() {
  return (
    <TabCampanasStack.Navigator>
      <TabCampanasStack.Screen
        name="TabCampanasScreen"
        component={TabCampanasScreen}
        options={{ headerTitle: "TabCampanasScreen", headerLeft: null }}
      />
      <TabCampanasStack.Screen
        name="TriviasScreen"
        component={TriviasScreen  }
        options={{ headerTitle: "Trivias" }}
      />
      <TabCampanasStack.Screen
        name="TriviaMultipleScreen"
        component={TriviaMultipleScreen }
        options={{ headerTitle: "Trivia multiple" }}
      />
    </TabCampanasStack.Navigator>
  );
}



const TabBGStack = createStackNavigator<TabBGParamList>();
function TabBGNavigator() {
  return (
    <TabBGStack.Navigator>
      <TabBGStack.Screen
        name="TabBGScreen"
        component={TabCBScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabBGStack.Navigator>
  );
}
