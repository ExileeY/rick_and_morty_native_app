import axios from "axios";

import { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { loadCharacters } from "@/utils/api";

import type { Info, Character } from "@/types/CharacterCard";
import CharacterCard from "@/components/CharacterCard";

export default function Index() {
  const [info, setInfo] = useState({} as Info);
  const [characters, setCharacters] = useState([] as Character[]);

  useEffect(() => {
    loadCharacters()
      .then(({ info, results }) => {
        setInfo(info);
        setCharacters(results);
      });
  }, []);

  const goToNext = () => {
    if (info.next) {
      axios.get(info.next).then(({ data }) => {
        setInfo(data.info);
        setCharacters([...characters].concat(data.results));
      });
    }
  };

  return (
    <FlatList
      data={characters}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => <CharacterCard character={item} />}
      onEndReached={goToNext}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
