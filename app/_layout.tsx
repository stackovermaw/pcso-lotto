import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ui/themed-text";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => (
          <SafeAreaView style={{ paddingHorizontal: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <FontAwesome name="bullseye" size={30} />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <ThemedText type="title">Lotto Results</ThemedText>

                <ThemedText type="default">
                  Wednesday, January 7, 2026
                </ThemedText>
              </View>
              <AntDesign
                name="api"
                size={30}
                color="red"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </SafeAreaView>
        ),
      }}
    />
  );
}
