import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DateTime from "@/components/results/DateTime";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function RootLayout() {
  const theme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background");

  const Header = () => (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ThemedView style={styles.row}>
        <FontAwesome name="bullseye" size={30} style={styles.iconLeft} />
        <ThemedView style={styles.column}>
          <ThemedText type="title">Lotto Results</ThemedText>
          <DateTime />
        </ThemedView>
        <AntDesign name="api" size={30} color="red" style={styles.iconRight} />
      </ThemedView>
    </SafeAreaView>
  );

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          header: () => <Header />,
        }}
      />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: "auto",
  },
});
