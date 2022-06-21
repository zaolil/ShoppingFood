//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

// create a component
const RectangleBtn = ({
     text,
     iconName,
     positionIcon,
     color,
     backgroundColor,
     buttonStyle,
     textStyle,
}) => {
     return (
          <View
               style={tw`relative flex justify-center items-center w-full rounded-2xl bg-[${backgroundColor}] ${buttonStyle} `}
          >
               {iconName && (
                    <Ionicons
                         name={iconName}
                         size={24}
                         color={color}
                         style={tw`absolute ${
                              positionIcon == "right" ? "right" : "left"
                         }-1/12`}
                    />
               )}

               <Text
                    style={tw`text-[${color}] py-5 text-center max-w-7/12 ${textStyle}`}
               >
                    {text}
               </Text>
          </View>
     );
};

//make this component available to the app
export default RectangleBtn;
