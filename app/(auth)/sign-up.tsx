import { View, Text, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native";
import {icons, images} from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <Image source={images.signUpCar} className="relative w-full h-[250px]"/>
                <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Create your account </Text>
            </View>

            <View>
                <InputField 
                    label="name"
                    placeholder="Enter your name"
                    icon={icons.person}
                    value={form.name}
                    onChangeText={(value) => setForm({...form, name: value})}   
                />
            </View>
        </ScrollView>
    )
}


export default SignUp;