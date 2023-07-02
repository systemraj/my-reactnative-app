import React from "react";
import { Text, TouchableOpacity } from "react-native";

const RoundedButton = ({ lable, containerStyle }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ backgroundColor: '#ADD8E6', padding: 12, borderRadius: 25, ...containerStyle }}>
            <Text style={{ color: '#000', fontWeight: '600', alignSelf: 'center', fontSize: 16 }}>{lable}</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton