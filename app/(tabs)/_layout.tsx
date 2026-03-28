import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
export default function TabsLayout() {
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: "#ffffff",
            headerStyle: {
                backgroundColor: "#101010"
            },
            headerTintColor: "#fff",
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: "#101010"
            }
            
        }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle: "San Antonio",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home" : "home-outline"} size={25} color={color}></Ionicons>
      }}/>
      <Tabs.Screen name="about" options={{
        headerTitle: "About",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "code-working-sharp" : "code-working-outline"} size={25} color={color}></Ionicons>
      }}/>
      
    </Tabs>
    /* LIQUID GLASS DESIGN */
    /*
    <NativeTabs>
        <NativeTabs.Trigger name="index">
            <Label>Maps</Label>
            <Icon sf="map" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
            <Label>About</Label>
            <Icon sf="chevron.left.forwardslash.chevron.right" />
        </NativeTabs.Trigger>
    </NativeTabs>
    */
  );
}
