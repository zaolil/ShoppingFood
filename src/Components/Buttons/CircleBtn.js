//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

// create a component
const CircleBtn = ({
     iconName,
     color,
     backgroundColor,
     buttonStyle,
     iconStyle,
}) => {
     return (
          <View
               style={tw`flex justify-center items-center w-fit rounded-2xl bg-[${backgroundColor}] ${buttonStyle} `}
          >
               {iconName && (
                    <Ionicons
                         name={iconName}
                         size={24}
                         color={color}
                         style={tw`${iconStyle}`}
                    />
               )}
          </View>
     );
};

//make this component available to the app
export default CircleBtn;
