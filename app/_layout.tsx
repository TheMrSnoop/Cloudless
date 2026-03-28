import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";
import { useFonts, DMMono_300Light, DMMono_400Regular, DMMono_500Medium } from "@expo-google-fonts/dm-mono";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
          headerStyle: {
              backgroundColor: "#101010"
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
      }}>


        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Live View",
            headerRight: () => (
              <Pressable style={styles.button} onPress={() => router.push("/settings")}>
              <Ionicons name="settings-outline" size={20} color="#ffffff" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen name="settings" options={{headerTitle: "Settings"}}/>
      </Stack>
    </>
  );
}


const styles = StyleSheet.create({ 
  button: {
    padding: 5,
    borderRadius: 10,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  }
})