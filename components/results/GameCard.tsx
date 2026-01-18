import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import WinningNumber from "./WinningNumber";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#a1a1a1",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    borderWidth: 0.5,
    position: "relative",
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: "100%",
    width: 4,
    borderTopStartRadius: 8,
    borderBottomLeftRadius: 0,
    backgroundColor: "red",
  },
  body: {
    padding: 4,
    borderColor: "#a1a1a1",
    borderWidth: 0.5,
    borderRadius: 8,
    borderTopWidth: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    gap: 8,
  },
  winningNumbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    marginBottom: 8,
  },
  line: {
    height: 1,
    backgroundColor: "#e5e7eb",
    width: "90%",
    margin: "auto",
    marginVertical: 4,
  },
  background: {
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

type GameCardProps = {
  game: string;
  // some game has multiple draw times
  time: string[];
  winningNumbers: number[];
  jackpotPrize: string;
};

// TODO: change color depending on game

export default function GameCard({
  game,
  jackpotPrize,
  time,
  winningNumbers,
}: GameCardProps) {
  return (
    <ThemedView>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.headerBar} />
        <LinearGradient
          colors={["#fff0ee", "transparent"]}
          style={styles.background}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <ThemedText style={{ fontWeight: "bold" }}>{game}</ThemedText>
        </LinearGradient>
      </ThemedView>
      <ThemedView style={styles.body}>
        <ThemedView
          style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
        >
          <FontAwesome name="clock-o" size={16} color="#a1a1a1" />
          <ThemedText style={{ color: "#a1a1a1" }}>{time[0]}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.winningNumbersContainer}>
          {winningNumbers.map((num, idx) => (
            <WinningNumber value={num} />
          ))}
        </ThemedView>

        <ThemedView style={styles.line} />
        <ThemedText
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#a1a1a1",
          }}
        >
          Jackpot Prize: {jackpotPrize}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
