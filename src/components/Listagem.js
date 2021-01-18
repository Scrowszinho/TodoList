import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
flex-direction:row;
height:50px;
align-items:center;
background-color:white;
padding:15px
`;

const ItemText = styled.Text`
font-size:15px;
flex:1;
`;

const ItemCheck = styled.View`
width:20px;
height:20px;
border-radius:10px;
background-color:${props => props.done?'#4285f4' : '#e04a3a'};
`;

export default (props) => {
    return(
    <Item onPress={props.onPress} activeOpacity={1} underlayColor="#DD">
        <>
            <ItemText>{props.data.task}</ItemText>
            <ItemCheck done={props.data.done}></ItemCheck>
        </>
    </Item>
    );
}