import React from "react";
import { Text, SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Button, Tooltip } from 'react-native-elements';
import { Touchable } from "react-native/types";
import Login from "./src/screen/Auth/Login";
import Signup from "./src/screen/Auth/Signup";
import Verify from "./src/screen/Auth/Verify";
import Home from "./Home";

const App = () => {

  const array = [4, 2, 20, 3, 42, 50];

  // Checks whether an element is even
  const value = array.forEach(element => element);
  array.splice(2, 0, 'raj')
  console.log('123', array)

  return (
    <SafeAreaView style={{ flex: 1, margin: 15 }}>
      <ScrollView style={{}}>
        <Text >hello</Text>
      </ScrollView>
      <View>
        <Tooltip
          containerStyle={{ width: 300, height: 60, marginTop: -20 }}
          backgroundColor="black"
          popover={
            <Text style={{ color: 'white' }}>Total price may vary a little depending on your location and seller you select.</Text>
          }>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 50 }}>
            <Text>Press me</Text>
            <TouchableOpacity>
              <Text>abc</Text>
            </TouchableOpacity>
          </View>
        </Tooltip>
      </View>
    </SafeAreaView>
  )
}

export default Home
