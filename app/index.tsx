import {
  useState,
  useEffect
} from "react";

import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet
} from "react-native";

import { getAllCharacters } from "@/utils/api";

import ItemsList from "@/components/items/ItemsList";

export default function Index() {
  const [info, setInfo] = useState({ prev: null, next: null });
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(({ info, results }) => {
        setInfo(info);
        setItems(results);
      });
  }, []);

  const goToPrev = () => {
    info.prev
      ? alert("Go to prev")
      : alert("No prev");
  };

  const goToNext = () => {
    info.next
      ? alert("Go to next")
      : alert("No next");
  };

  return (
    <ScrollView>
      <ItemsList items={items}/>

      <Pressable
        disabled={!info.prev}
        style={{ alignItems: "center", justifyContent: "center" }} 
        onPress={goToPrev}
      >
        <Text>Prev</Text>
      </Pressable>

      <Pressable
        disabled={!info.next}
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={goToNext}
      >
        <Text>Next</Text>
      </Pressable>
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
