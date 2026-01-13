import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default function Index() {
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <FontAwesome name="chevron-left" size={16} color="black" />
        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="calendar"
            size={16}
            color="black"
            style={{ marginRight: 16 }}
          />
          <ThemedText>
            {new Date().toLocaleDateString(undefined, {
              dateStyle: "long",
            })}
          </ThemedText>
          <ThemedView
            style={{
              marginLeft: 16,
              backgroundColor: "#11ad32",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 4,
            }}
          >
            <ThemedText
              style={{
                textTransform: "uppercase",
                lineHeight: 16,
              }}
            >
              Today
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <FontAwesome name="chevron-right" size={16} color="black" />
      </ThemedView>
    </ThemedView>
  );
}

export const options = {
  title: "Home",
};
