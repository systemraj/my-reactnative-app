import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import RoundedButton from "../../../component/RoundedButton";
import Input from "../../../component/Input";

const Signup = () => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfrimPassword] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, margin: 16 }}>
            <ScrollView>
                <Text style={{ fontWeight: '600', fontSize: 30, marginTop: 50 }}>Signup</Text>
                <Input
                    placeholder={"Name*"}
                    value={name}
                />
                <Input
                    placeholder={"Mobile*"}
                    value={mobile}
                    keyboardType={'number-pad'}
                />
                <Input
                    placeholder={"Confrim Password*"}
                    value={confrimPassword}
                />
                <Input
                    placeholder={"Password*"}
                    value={password}
                />

                <RoundedButton
                    lable={'Signup'}
                    containerStyle={{ marginTop: 50 }}
                />
                <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
                    <Text>Already have an account,</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', fontWeight: '600' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Signup