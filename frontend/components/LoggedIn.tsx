import { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { UserDetails } from "@/hooks/useUserDetails";

export default function LoggedIn({handleLogout}:{handleLogout:()=>void}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        profilePicture: ''
    });

    useEffect(() => {
        setUser({
            name: UserDetails.name,
            email: UserDetails.email,
            phoneNumber: UserDetails.phoneNumber,
            address: UserDetails.address,
            profilePicture: UserDetails.profilePicture
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 dark:bg-black bg-indigo-50">
            <View className="px-6 py-8">
                <View className="flex-row justify-between items-center">
                    <Text className="text-3xl font-bold dark:text-white text-indigo-800">Welcome!</Text>
                    <TouchableOpacity 
                        onPress={handleLogout}
                        className="bg-indigo-600 dark:bg-indigo-500 px-4 py-2 rounded-full"
                    >
                        <Text className="text-white font-medium">Logout</Text>
                    </TouchableOpacity>
                </View>
                
                <View className="mt-8 items-center">
                    <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-800">
                        <Image 
                            style={{width:'100%', height:'100%', resizeMode:'cover'}} 
                            source={{uri: user.profilePicture}} 
                        />
                    </View>
                    
                    <Text className="mt-4 text-2xl font-bold dark:text-white text-indigo-900">{user.name}</Text>
                    <Text className="dark:text-indigo-400 text-indigo-600">{user.email}</Text>
                </View>
                
                <View className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <Text className="text-lg font-semibold dark:text-white text-indigo-900 mb-4">User Information</Text>
                    
                    <View className="mb-4">
                        <Text className="dark:text-indigo-300 text-indigo-400 text-sm">Phone Number</Text>
                        <Text className="dark:text-white text-indigo-800 font-medium">{user.phoneNumber}</Text>
                    </View>
                    
                    <View>
                        <Text className="dark:text-indigo-300 text-indigo-400 text-sm">Address</Text>
                        <Text className="dark:text-white text-indigo-800 font-medium">{user.address}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}