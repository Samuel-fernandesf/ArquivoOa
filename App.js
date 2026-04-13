import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { GREEN_LANTERN_DATA } from './data/hqs';
import { styles } from './styles/styles'

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState(GREEN_LANTERN_DATA);

  const addTitle = () => {
    if (text.trim() === '') {
      return
    };

    const newItem = {
      id: Date.now().toString(),
      title: text
    };

    setData([...data, newItem]);
    setText('');
  }

  const removeTitle = (id) => {
    const newData = data.filter(item => {
      return item.id !== id
    });
    setData(newData);
  }

  const concludeTitle = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, conclude: !item.conclude };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>

      <Text style={styles.h1}>Arquivo Oa</Text>
      <Text style={styles.h3}>No dia mais claro, na noite mais densa, o mal sucumbirá ante a minha presença. Todo aquele que venera o mal há de penar, quando o poder do Lanterna Verde enfrentar!</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Digite uma HQ'
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.button} onPress={addTitle}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <View style={styles.itemView}>

            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => concludeTitle(item.id)}
            >

              <Text style={[styles.item, item.conclude && styles.itemConclude]}>
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeTitle(item.id)}>
              <Text style={styles.buttonRemove}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyList}>Nenhuma HQ cadastrada</Text>
        } />

    </View>


  );
}


