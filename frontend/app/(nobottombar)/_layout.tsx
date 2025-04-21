import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function NobottombarLayout() {
    return (
        <View style={{flex: 1}}>
            <View className="bg-black p-4">
                <Text className="text-white">Go Back</Text>
            </View>
            <View style={{flex: 1}}>
                <Slot />
            </View>
        </View>
    );
}