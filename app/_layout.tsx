import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: setup themed text just like from app example.
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
              <FontAwesome name="bullseye" size={24} />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text {...props} style={{ fontSize: 25 }}>
                  Lotto Results
                </Text>
                <Text {...props}>Wednesday, January 7, 2026</Text>
              </View>
              <AntDesign
                name="api"
                size={24}
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
