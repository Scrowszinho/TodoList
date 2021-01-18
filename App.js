import React, {useState} from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/Listagem';
import AddItemArea from './src/components/AddItems';
import uuid from 'uuid/dist/v4';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListItemSwipe from './src/components/Delete';
const Page = styled.SafeAreaView`
flex:1;
background-color:#eaf2f7;
padding-top:30px;
`;

const Scroll = styled.FlatList`
flex:1;
`;

export default function App() {
  const [items, setItems] = useState(lista);

  const addNewItem = (txt) => {
  let newItems = [...items];
  newItems.push({
    id:uuid,
    task:txt,
    done:false
  });
  setItems(newItems);
  }

  const toggleDone = (index) => {
  let newItems = [...items];
  newItems[index].done = !newItems[index].done;
  setItems(newItems);
  }

  const deleteItem = (index) => {
    let newItems = [...items];
   newItems = newItems.filter((it,i)=>i!=index);
    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd = {addNewItem} />
      <SwipeListView 
      data={items}
      renderItem={({item, index}) => <ListaItem data={item} onPress={() => toggleDone(index)} />}
      leftOpenValue={50} disableLeftSwipe={true}
      renderHiddenItem={({item,index})=> <ListItemSwipe onDelete={() => deleteItem(index)}/>}
      keyExtractor={(item)=>item.id}
      />
    </Page>
  );
}
