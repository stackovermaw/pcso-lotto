import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  game: {
    backgroundColor: "#e6e9ee",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  background: {
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

const WinningNumber = ({ value }: { value: string }) => {
  return (
    <ThemedView
      style={{
        width: 44,
        height: 44,
        borderRadius: 22, // half of width/height
        backgroundColor: "#fff0ee",
        borderWidth: 2,
        borderColor: "#ff6b5a",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 6,
      }}
    >
      <ThemedText
        style={{
          color: "#ff6b5a",
          fontWeight: "black",
        }}
      >
        {value}
      </ThemedText>
    </ThemedView>
  );
};

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
                fontSize: 12,
                color: "white",
              }}
            >
              Today
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <FontAwesome name="chevron-right" size={16} color="black" />
      </ThemedView>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={{ gap: 16 }}
      >
        <TouchableOpacity onPress={() => {}}>
          <ThemedText
            style={{
              ...styles.game,
              backgroundColor: "#11ad32",
              color: "white",
            }}
          >
            All Games
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>6/58 Ultra</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>6/49 Super</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>6/42 Lotto</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>6D</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>4D</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>3D</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>2D</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText style={styles.game}>STL</ThemedText>
        </TouchableOpacity>
      </ScrollView>

      {/* TODO: make reusable */}
      <ThemedView>
        <ThemedView
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            borderColor: "#a1a1a1",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0,
            borderWidth: 0.5,
            position: "relative",
          }}
        >
          <ThemedView
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              height: "100%",
              width: 4,
              borderTopStartRadius: 8,
              borderBottomLeftRadius: 0,
              backgroundColor: "red",
            }}
          />
          <LinearGradient
            colors={["#fff0ee", "transparent"]}
            style={styles.background}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <ThemedText style={{ fontWeight: "bold" }}>
              6/58 Ultra Lotto
            </ThemedText>
          </LinearGradient>
        </ThemedView>
        <ThemedView
          style={{
            padding: 4,
            borderColor: "#a1a1a1",
            borderWidth: 0.5,
            borderRadius: 8,
            borderTopWidth: 0,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 0,
            gap: 8,
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <FontAwesome name="clock-o" size={16} color="#a1a1a1" />
            <ThemedText style={{ color: "#a1a1a1" }}>9:00 PM</ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <WinningNumber value="08" />
            <WinningNumber value="46" />
            <WinningNumber value="48" />
            <WinningNumber value="23" />
            <WinningNumber value="03" />
            <WinningNumber value="52" />
          </ThemedView>

          <ThemedView
            style={{
              height: 1,
              backgroundColor: "#e5e7eb",
              width: "90%",
              margin: "auto",
              marginVertical: 4,
            }}
          />
          <ThemedText
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#a1a1a1",
            }}
          >
            Jackpot Prize: ₱98,500,000.00
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

export const options = {
  title: "Home",
};
