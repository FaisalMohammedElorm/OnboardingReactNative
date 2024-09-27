import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';



const {width, height} = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home")
  }
  return (
      <View style={styles.container}>
        <Onboarding
          onDone = {handleDone}
          onSkip = {handleDone}
          containerStyles={{ paddingHorizontal: 25}}
          pages={[
            {
              backgroundColor: '#41F167',
              image: 
                  <View
                    style={styles.lottie}
                  >
                    <LottieView source={require('../assets/laptop.json')} autoPlay loop />
                  </View>
              ,
              title: 'Boost Productivity',
              subtitle: 'Subscribe to this channel to boost your productivity level',
            },
            {
              backgroundColor: '#DF8C8C',
              image: 
                  <View
                    style={styles.lottie}
                  >
                    <LottieView source={require('../assets/yoga.json')} autoPlay loop />
                  </View>
              ,
              title: 'Work Seamlessly',
              subtitle: 'Get your work done seamlessly without interruption',
            },
            {
              backgroundColor: '#28A3D3',
              image: 
                  <View
                    style={styles.lottie}
                  >
                    <LottieView source={require('../assets/boost.json')} autoPlay loop />
                </View>
              ,
              title: 'Achieve Higher Goals',
              subtitle: 'By boosting your productivity, we help you to achieve higher goals',
            },
            
          ]}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white",

  },
  lottie:{
    width: width*0.9,
    height: width,
  }
});
export default OnboardingScreen;