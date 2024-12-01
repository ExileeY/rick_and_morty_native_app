import axios from "axios";

import { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import type { Info, Character } from "@/types/CharacterCard";
import CharacterCard from "@/components/CharacterCard";

export default function Index() {
  const [info, setInfo] = useState({} as Info);
  const [characters, setCharacters] = useState([] as Character[]);

  const load = async (url?: string) => {
    const { data } = url
      ? await axios.get(url)
      : await axios.get('https://rickandmortyapi.com/api/character');

    setInfo(data.info);
    setCharacters(characters.concat(data.results));
  }

  useEffect(() => { load(); }, []);

  

  return (
    <FlatList
      data={characters}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => <CharacterCard character={item} />}
      onEndReached={() => info.next && load(info.next)}
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
