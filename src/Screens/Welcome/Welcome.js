import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import tw from "twrnc";
import LottieView from "lottie-react-native";

import colorCode from "../../Contants/colorCode";
import imagePath from "../../Contants/imagePath";
import iconStrings from "../../Contants/iconStrings";

import { RectangleBtn } from "../../Components";

const Welcome = () => {
     return (
          <View
               style={tw`relative flex items-center justify-center w-full h-full`}
          >
               <Image source={imagePath.bg_welcome} resizeMode="contain" />

               <View
                    style={tw`absolute bottom-2/12 flex items-center justify-center max-w-11/12`}
               >
                    <Image style={tw`mb-5`} source={imagePath.logo_white} />

                    <Text style={tw`text-center text-4xl text-white font-bold`}>
                         Welcome to our store
                    </Text>
                    <Text style={tw`text-center text-base text-gray-400`}>
                         Ger your groceries in as fast as one hour
                    </Text>

                    <RectangleBtn
                         text={"get started"}
                         color={`${colorCode.secondaryColor}`}
                         backgroundColor={`${colorCode.primaryColor}`}
                         buttonStyle={"mt-8"}
                         textStyle={"text-lg capitalize font-bold"}
                    />
               </View>
          </View>
     );
};

export default Welcome;
