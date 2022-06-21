import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import tw from "twrnc";
import LottieView from "lottie-react-native";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";

import { RectangleBtn, CircleBtn } from "../../../Components";

import colorCode from "../../../Contants/colorCode";
import imagePath from "../../../Contants/imagePath";
import iconStrings from "../../../Contants/iconStrings";

import { login } from "../../../Ultils/API/userApi";
import {
     Keyboard,
     KeyboardAvoidingView,
     SafeAreaView,
     ScrollView,
     TouchableWithoutFeedback,
} from "react-native";

// create a component
const LogginOption = () => {
     //  const {
     //       control,
     //       handleSubmit,
     //       formState: { errors },
     //       setValue,
     //  } = useForm();

     //  const mutation = useMutation(login, {
     //       onSuccess: async (data) => {
     //            //  await SecureStore.setItemAsync("token", data.token);
     //            //  await SecureStore.setItemAsync("userID", data.id);

     //            //  context.updateUser(data);

     //            Toast.show({
     //                 type: "success",
     //                 text1: "Login success! 👋",
     //                 visibilityTime: 5000,
     //            });

     //            //  setValue([{ username: "" }, { password: "" }]);
     //       },
     //       onError: (error) => {
     //            Toast.show({
     //                 type: "error",
     //                 text1: `Code : ${error.response.data.code}`,
     //                 text2: error.response.data.message,
     //                 visibilityTime: 5000,
     //            });
     //       },
     //  });

     //  const onSubmit = async (data) => mutation.mutate(data);

     return (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
               <SafeAreaView style={{ flex: 1 }}>
                    <KeyboardAvoidingView
                         style={{ flex: 1 }}
                         behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                         <ScrollView style={tw`relative flex-1 px-3 bg-gray-400`}>
                              <Image
                                   source={imagePath.background_1}
                                   style={tw`flex-1`}
                                   resizeMode={"center"}
                              />
                              <Text>
                                   jefvhuvjhnvbjsdvhnbsdjkvdshnvjkdsvndsv
                              </Text>
                         </ScrollView>
                    </KeyboardAvoidingView>
               </SafeAreaView>
          </TouchableWithoutFeedback>
     );
};

export default LogginOption;

{
     /* <CircleBtn
                              iconName={"chevron-right"}
                              color={colorCode.secondaryColor}
                              backgroundColor={colorCode.primaryColor}
                              buttonStyle={"p-3.7 rounded-full w-min"}
                              iconStyle={""}
                         /> */
}
