import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {  Text, SafeAreaView, TouchableOpacity, View, Image } from "react-native";
import Swiper from 'react-native-swiper'

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [index, setIndex] = useState(0);
    const isLastSlide = index === onboarding.length - 1; 

    return (
        <SafeAreaView className="h-full flex justify-between items-center bg-white">
            <TouchableOpacity className="w-full justify-end flex items-end p-5" onPress={() => {router.replace("/(auth)/sign-up")}}>
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper 
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"/>}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"/>}
                onIndexChanged={(index) => setIndex(index)}
            >
                {onboarding.map((item,index) => (
                    <View key={item.id} className="flex justify-center items-center p-5 ">
                        <Image 
                            source={item.image}
                            className="w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <View className="flex flex-row items-center justify-center mt-10 w-full">
                            <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
                        </View>
                        <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>

            <CustomButton 
                title={isLastSlide ? "Get Started" : "Next"}
                onPress={() => {isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)}}
                className="w-11/12 mt-10"
            />
        </SafeAreaView>
    )
}


export default Onboarding;