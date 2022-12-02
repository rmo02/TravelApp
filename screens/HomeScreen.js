import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[39px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[36px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      {/* circle Section */}
      <View className="w-[330px] h-[330px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[330px] h-[330px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Image
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <View
          className="absolute bottom-10 w-24 h-24 border-r-2 border-t-4 
      border-[#00BCC9] rounded-full items-center justify-center"
        >
          <TouchableOpacity>
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
              <Text className="text-gray-50 text-[34px] font-semibold">Go</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar className="bg-white auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
