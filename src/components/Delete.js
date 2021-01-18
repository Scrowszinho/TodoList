import React, { useState } from 'react';
import styled from 'styled-components/native';

const ListaItem = styled.TouchableHighlight`
width:100%;
height:50px;
background-color:#FF0000;
`;

const Icon = styled.Image`
width:20px;
height:20px;
margin:15px;
color:white;
`;

export default (props) => {
    return (
        <ListaItem onPress={props.onDelete} underlayColor="#FF333">
                <Icon source={require('../img/garbage.png')} resizeMode="cover"/>
        </ListaItem>
    );
}