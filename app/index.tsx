import {
  ScrollView,
  StyleSheet
} from "react-native";

import ItemsList from "@/components/items/ItemsList";

export default function Index() {
  const defaultImage = require('@/assets/images/icon.png');
  const items = [
    { id: 1, name: "Item 1", image: defaultImage },
    { id: 2, name: "Item 2", image: defaultImage },
    { id: 3, name: "Item 3", image: defaultImage },
    { id: 4, name: "Item 4", image: defaultImage },
    { id: 5, name: "Item 5", image: defaultImage },
    { id: 6, name: "Item 6", image: defaultImage },
    { id: 7, name: "Item 7", image: defaultImage },
    { id: 8, name: "Item 8", image: defaultImage }
  ]

  return (
    <ScrollView>
      <ItemsList items={items}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
