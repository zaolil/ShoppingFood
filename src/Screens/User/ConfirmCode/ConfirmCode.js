//import liraries
import React, { Component } from "react";
import {
     View,
     Text,
     TouchableWithoutFeedback,
     SafeAreaView,
     KeyboardAvoidingView,
     ScrollView,
} from "react-native";

import tw from "twrnc";

// create a component
const ConfirmCode = () => {
     return (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
               <SafeAreaView style={{ flex: 1 }}>
                    <KeyboardAvoidingView
                         style={{ flex: 1 }}
                         behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                         <ScrollView></ScrollView>
                    </KeyboardAvoidingView>
               </SafeAreaView>
          </TouchableWithoutFeedback>
     );
};

export default ConfirmCode;
