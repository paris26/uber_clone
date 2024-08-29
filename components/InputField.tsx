import React from 'react'
import { KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native'

const InputField = ({label, labelStyle, icon, secureTextEntry=false , containerStyle, inputStyle, iconStyle, className, ...props}) => {
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className="my-2 w-full">
                    <Text className={`tet-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>

                    <View className={`flex flex-row justify-start items-center bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                       
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default InputField;