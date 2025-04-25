import DownloadPicture from "@/components/DownLoadButton";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Accounts() {
    const [pictureOpen, setPictureOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setPictureOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setPictureOpen(false);
    };

    return (
        <SafeAreaView className="flex-1">
            <View className="p-5">
                <Text>Accounts Page</Text>
                <TouchableOpacity 
                   onPress={handleOpenBottomSheet}
                >
                    <Text className="text-blue-400 text-center mt-5 text-lg font-semibold">Open Bottom Sheet</Text>
                </TouchableOpacity>
            </View>
            
            <DownloadPicture 
                isVisible={pictureOpen} 
                onClose={handleCloseBottomSheet}
            />
        </SafeAreaView>
    );
}