import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Header,
    View,
    Button,
    Text,
    Content,
    Form,
    Item,
    Input,
    Label,
} from 'native-base';
const CustomInput = ({ placeholder, inptutStyle, itemStyle }) => {
    return (
        <Item style={{ ...itemStyle }} regular >
            <Input placeholder={placeholder} style={{ ...inptutStyle }} />
        </Item>
    );
}

CustomInput.defaultProps = {
    inptutStyle: {},
    itemStyle: {},
    placeholder: ''
}

export default CustomInput;
