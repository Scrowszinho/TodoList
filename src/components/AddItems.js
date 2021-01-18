import React, { useState } from 'react';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
padding:40px;
background-color: white;
`;

const ItemImput = styled.TextInput`
background-color:white;
font-size:15px;
height:50px;
border-radius:10px;
padding:10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
       if(item.trim() != ''){
        props.onAdd(item.trim());
        setItem('');
       }
    }

    return (
        <AddItemArea>
            <ItemImput placeholder="Digite uma nova tarefa"
                onChangeText={e => setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="go"
            />
        </AddItemArea>
    );
}