import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    Text
} from 'native-base';

const CustomButton = ({ buttonText, buttonStyle, onPress }) => {
    return (
        <Button
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ ...buttonStyle }}
            onPress={onPress}
            primary
            >
            <Text> {buttonText} </Text>
        </Button>
    );
}

CustomInput.defaultProps = {
    buttonStyle: {},
    buttonText: '',
    onPress: () => { }
}

export default CustomButton;
