import {
  useState,
  useEffect
} from "react";

import {
  ScrollView,
  StyleSheet
} from "react-native";

import { getAllCharacters } from "@/utils/api";

import ItemsList from "@/components/items/ItemsList";

export default function Index() {
  const [info, setInfo] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(({ info, results }) => {
        setInfo(info);
        setItems(results);
      });
  }, []);

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
