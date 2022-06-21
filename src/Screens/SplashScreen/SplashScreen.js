import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LottieView from 'lottie-react-native';
import tw from 'twrnc';

import colorCode from '../../Contants/colorCode';
import imagePath from '../../Contants/imagePath';

const SplashScreen = () => {

	return (
		// border-solid border-2 border-sky-500
		<View  style={tw.style({backgroundColor : colorCode.primaryColor}, `flex-1 items-center justify-center w-full h-full ` )}>
				<Image  style={tw`w-11/12 h-2/12`} source={imagePath.primaryLogo} />
				<LottieView source={imagePath.jsonSpinner} autoPlay={true} loop={true} style={{ width: 120 }} />
		</View>
	);
};

export default SplashScreen;
