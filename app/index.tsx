import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import GameCard from "@/components/results/GameCard";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  dateControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
});

export default function Index() {
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView style={styles.dateControls}>
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
      <GameCard
        game="6/58 Ultra Lotto"
        time={["9:00PM"]}
        winningNumbers={[8, 23, 56, 32, 42, 52]}
        jackpotPrize="₱98,500,000.00"
      />
    </ThemedView>
  );
}

export const options = {
  title: "Home",
};
