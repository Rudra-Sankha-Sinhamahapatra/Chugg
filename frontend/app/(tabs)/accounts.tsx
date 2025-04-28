import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LoggedIn from "@/components/LoggedIn";

export default function Accounts() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    if (isLoggedIn) {
        return <LoggedIn handleLogout={handleLogout} />;
    }

    return (
        <SafeAreaView className="flex-1 dark:bg-black bg-indigo-50">
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 justify-center"
            >
                <ScrollView className="px-8">
                    <View className="items-center my-10">
                        <Text className="text-5xl font-bold text-black dark:text-white mb-2">Chuggs</Text>
                        <Text className="text-black dark:text-white text-lg opacity-90 tracking-wide">Your Wallpaper Paradise</Text>
                    </View>
                    
                    <View className={`${isDark ? "bg-white/10" : "bg-white"} backdrop-blur-lg rounded-3xl p-14 shadow-2xl border ${isDark ? 'border-white/20' : 'border-black/10'}`}>
                        <View className={`rounded-3xl ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <View className={`${isMobile ? 'w-full' : 'flex-1 pr-4'}`}>
                                <View className="mb-6">
                                    <Text className="text-black dark:text-white font-semibold mb-2 text-lg">Email</Text>
                                    <TextInput
                                        className={`${isDark ? 'bg-white/20 text-white' : 'bg-black/5 text-black'} p-4 rounded-xl mb-1`}
                                        placeholder="Enter your email"
                                        placeholderTextColor={isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                                
                                <View className="mb-6">
                                    <Text className="text-black dark:text-white font-semibold mb-2 text-lg">Password</Text>
                                    <TextInput
                                        className={`${isDark ? 'bg-white/20 text-white' : 'bg-black/5 text-black'} p-4 rounded-xl mb-1`}
                                        placeholder="Enter your password"
                                        placeholderTextColor={isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                                        secureTextEntry
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <TouchableOpacity className="self-end mt-1">
                                        <Text className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm`}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <TouchableOpacity 
                                    className={`${isDark ? 'bg-indigo-50' : 'bg-black'} py-4 rounded-xl mb-4 shadow-lg`}
                                    onPress={handleLogin}
                                >
                                    <Text className={`${isDark ? 'text-black' : 'text-white'} font-bold text-center text-lg`}>Sign In</Text>
                                </TouchableOpacity>
                                
                                <View className="flex-row items-center justify-center mt-4">
                                    <View className={`h-px ${isDark ? 'bg-white/30' : 'bg-black/30'} flex-1`} />
                                    <Text className={`${isDark ? 'text-white/70' : 'text-black/70'} mx-4`}>or continue with</Text>
                                    <View className={`h-px ${isDark ? 'bg-white/30' : 'bg-black/30'} flex-1`} />
                                </View>
                                
                                <View className="flex-row justify-center mt-4 space-x-4">
                                    <TouchableOpacity className={`w-12 h-12 ${isDark ? 'bg-white/20' : 'bg-black/10'} rounded-full items-center justify-center`}>
                                        <Text className={`${isDark ? 'text-white' : 'text-black'} text-lg font-bold`}>G</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className={`w-12 h-12 ${isDark ? 'bg-white/20' : 'bg-black/10'} rounded-full items-center justify-center`}>
                                        <Text className={`${isDark ? 'text-white' : 'text-black'} text-lg font-bold`}>f</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className={`w-12 h-12 ${isDark ? 'bg-white/20' : 'bg-black/10'} rounded-full items-center justify-center`}>
                                        <Text className={`${isDark ? 'text-white' : 'text-black'} text-lg font-bold`}>in</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            {!isMobile && (
                                <View className="flex-1 ml-2">
                                    <View className="overflow-hidden rounded-2xl h-full border border-white/20">
                                        <Image 
                                            source={{ uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/MbKPsa9KQtGV9uPXhyOFpg' }} 
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                            )}
                        </View>
                        
                        {isMobile && (
                            <View className="mt-6 h-48">
                                <View className="overflow-hidden rounded-2xl h-full border border-white/20">
                                    <Image 
                                        source={{ uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/MbKPsa9KQtGV9uPXhyOFpg' }} 
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>
                        )}
                    </View>
                    
                    <View className="my-8 items-center">
                        <Text className="dark:text-white/80 text-black/80 text-center">Don't have an account?</Text>
                        <TouchableOpacity className="mt-2">
                            <Text className="dark:text-white text-black font-bold text-lg">Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}