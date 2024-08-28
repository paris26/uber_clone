import { router } from "expo-router";
import {  Text, SafeAreaView, TouchableOpacity } from "react-native";

const Onboarding = () => {

    return (
        <SafeAreaView className="h-full flex justify-between items-center bg-white">
            <TouchableOpacity className="w-full justify-end flex items-end p-5" onPress={() => {router.replace("/(auth)/sign-up")}}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default Onboarding;