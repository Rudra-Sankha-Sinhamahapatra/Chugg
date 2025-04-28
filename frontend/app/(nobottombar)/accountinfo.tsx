import { UserDetails } from "@/hooks/useUserDetails";
import { Text, Image } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";

export default function AccountInfo() {
    const {name,email,phoneNumber,address,profilePicture} = UserDetails;
    return <SafeAreaView>
       <Text className="text-center text-2xl font-bold my-2">
        Account Info
       </Text>
       <View>
        <View>
            <View>
                <Image source={{uri: profilePicture}} />
            </View>
        </View>
       </View>

    </SafeAreaView>
}