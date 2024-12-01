import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

import type { Character } from "@/types/CharacterCard";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <View style={styles.item}>
      <Image
        source={character.image}
        style={styles.itemImage}
      />
      <Text style={styles.itemText}>
        {character.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    width: "50%",
    padding: 10
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 15
  },
  itemText: {
    paddingTop: 3,
    fontSize: 20
  }
});
