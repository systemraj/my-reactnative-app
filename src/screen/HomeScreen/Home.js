import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import RoundedButton from "../../component/RoundedButton";
import Input from "../../component/Input";

const Home = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, margin: 16 }}>
            <ScrollView>
                <Text style={{ fontWeight: '600', fontSize: 30, marginTop: 50 }}>Home</Text>

            </ScrollView>
        </SafeAreaView>

    )
}

export default Home