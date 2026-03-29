import {
  DMMono_300Light,
  DMMono_400Regular,
  DMMono_500Medium,
  useFonts,
} from "@expo-google-fonts/dm-mono";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#101010",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "San Antonio, TX",
            headerRight: () => (
              <Pressable
                style={styles.button}
                onPress={() => router.push("/settings")}
              >
                <Ionicons name="settings-outline" size={20} color="#ffffff" />
              </Pressable>
            ),
            headerLeft: () => (
              <Pressable
                style={styles.button}
                onPress={() => router.push("/settings")}
              >
                <Ionicons name="logo-apple-ar" size={20} color="#ffffff" />
              </Pressable> 
            )
          }}
        />

        <Stack.Screen
          name="settings"
          options={{
            headerTitle: "",
            headerBackButtonDisplayMode: "minimal"
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
