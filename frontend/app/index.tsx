import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function () {
    return (
        <View style={{ flex: 1 }}>
            <Text>Hello</Text>
            <Button title="Accounts Page" onPress={() => router.push("/accounts")} />
            <Button title="Explore Page" onPress={() => router.push("/explore")} />
            <Button title="For you Page" onPress={() => router.push("/foryou")} />
        </View>
    );
}