import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import { StyleSheet, Image, Platform, View } from "react-native";

export default function HistoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText></ThemedText>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding:16,
    borderRadius: 16
  },
});
