import React from "react";
import Splash from "screens/Splash";
import Home from "screens/Home";
import DeatilMovies from "screens/Detail";
import DetailCast from "screens/DetailCast";
import Actors from "screens/Actors";
import Label from "components/Label";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View } from "react-native";
import { IconMovieInActive } from "assets/";
import { IconMovieActive } from "assets/";
import { IconActorActive } from "assets/";
import { IconActorInActive } from "assets/";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DeatilMovies}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailCast"
          component={DetailCast}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          height: 64
        },
        showIcon: true,
        showLabel: false,
        tabBarShowLabel: false,
        inactiveTintColor: "#4f4b4b"
      }}
    >
      <Tab.Screen
        name="MainHome"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <View>
              {focused
                ? <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={IconMovieInActive}
                      style={{ height: 25, width: 25 }}
                    />
                    <Label bold>Home</Label>
                  </View>
                : <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={IconMovieActive}
                      style={{ height: 25, width: 25 }}
                    />
                    <Label bold>Home</Label>
                  </View>}
            </View>
        }}
      />
      <Tab.Screen
        name="Actors"
        component={Actors}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <View>
              {focused
                ? <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={IconActorInActive}
                      style={{ height: 25, width: 25 }}
                    />
                    <Label bold>Actors</Label>
                  </View>
                : <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={IconActorActive}
                      style={{ height: 25, width: 25 }}
                    />
                    <Label bold>Actors</Label>
                  </View>}
            </View>
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Router;
