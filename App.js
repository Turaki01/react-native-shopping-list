import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: generateRandomNumbers, text: 'Milk'},
    {id: generateRandomNumbers, text: 'Bread'},
    {id: generateRandomNumbers, text: 'Eggs'},
    {id: generateRandomNumbers, text: 'Juice'},
  ]);

  const generateRandomNumbers = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      // Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: generateRandomNumbers, text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        key={items.id}
        data={items}
        renderItem={({item}) => (
          <ListItem deleteItem={deleteItem} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
