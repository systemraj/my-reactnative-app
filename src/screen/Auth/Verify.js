import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import RoundedButton from "../../../component/RoundedButton";
import Input from "../../../component/Input";

const Verify = () => {
    const [otp, setOtp] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, margin: 16 }}>
            <ScrollView>
                <Text style={{ fontWeight: '600', fontSize: 30, marginTop: 50 }}>Verify</Text>
                <Input
                    placeholder={"OTP*"}
                    value={otp}
                />

                <RoundedButton
                    lable={'Home'}
                    containerStyle={{ marginTop: 50 }}
                />

            </ScrollView>
        </SafeAreaView>

    )
}

export default Verify