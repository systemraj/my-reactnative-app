import React from "react";
import { TextInput, View } from "react-native";

const Input = ({ placeholder, value, containerStyle, keyboardType }) => {

    return (
        <View style={{ borderWidth: 0.5, borderColor: 'black', padding: 10, marginTop: 16, justifyContent: 'center', ...containerStyle }}>
            <TextInput keyboardType={keyboardType} placeholder={placeholder}
                value={value}
            />
        </View>
    )
}

export default Input