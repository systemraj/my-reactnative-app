import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import RoundedButton from "../../../component/RoundedButton";
import Input from "../../../component/Input";

const Login = () => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, margin: 16 }}>
            <ScrollView>
                <Text style={{ fontWeight: '600', fontSize: 30, marginTop: 50 }}>Login</Text>
                <Input
                    placeholder={'Mobile*'}
                    value={mobile}
                />

                <Input
                    placeholder={'Password*'}
                    value={password}
                />

                <RoundedButton
                    lable={'Login'}
                    containerStyle={{ marginTop: 50 }}
                />
                <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
                    <Text>Create an account,</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', fontWeight: '600' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Login