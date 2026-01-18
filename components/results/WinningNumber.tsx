import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function WinningNumber({ value }: { value: number }) {
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
}
