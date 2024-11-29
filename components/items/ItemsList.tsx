import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Image } from 'expo-image';

import React from "react";

type Item = {
  id: number,
  name: string,
  image: string
};

type Props = {
  items: Item[]
};

export default function ItemsList({ items }: Props) {
  return (
    <View style={{
      ...styles.container,
      ...styles.row
    }}>
      {
        items.map((item) => (
          <View
            key={item.id}
            style={styles.item}
          >
            <Image
              source={item.image}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>
              {item.name}
            </Text>
          </View>
        )) 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  item: {
    alignItems: "center",
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
