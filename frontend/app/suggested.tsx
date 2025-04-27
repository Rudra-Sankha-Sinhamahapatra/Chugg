import SplitView from "@/components/SplitView";
import { useWindowDimensions, View } from "react-native";
import { ScrollView,Text } from "react-native";
import { Link } from "expo-router";
import { WallPaperContext } from "@/context/WallPaperContext";
import { useContext } from "react";
import DownloadPicture from "@/components/DownLoadButton";

export default function Suggested () {
    const { width } = useWindowDimensions();
    const { selectedWallpaper, setSelectedWallpaper, wallpapers } = useContext(WallPaperContext);

    const suggestedWallpapers = wallpapers.filter(wallpaper => wallpaper.suggested);

    return (
        <>
            <ScrollView className="flex-1">
                <View className="container">
                    <Link href="/accountinfo" className="mt-6">
                        <Text className="dark:text-white text-black mb-6">Account Info</Text>
                    </Link>
                    <SplitView wallpapers={suggestedWallpapers} width={width} />
                </View>
            </ScrollView>
            {selectedWallpaper && <DownloadPicture isVisible={!!selectedWallpaper} onClose={() => setSelectedWallpaper(null)} wallPaper={selectedWallpaper} />}
        </>
    );
}