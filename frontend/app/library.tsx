import { ScrollView, Text, View } from "react-native";
import SplitView from "@/components/SplitView";
import { useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { WallPaperContext } from "@/context/WallPaperContext";
import { useContext } from "react";
import DownloadPicture from "@/components/DownLoadButton";

export default function Library () {
    const { width } = useWindowDimensions();
    const { selectedWallpaper, setSelectedWallpaper, wallpapers } = useContext(WallPaperContext);

    const libraryWallpapers = wallpapers.filter(wallpaper => wallpaper.library);

    return (
        <>
            <ScrollView className="flex-1">
                <View className="container">
                    <Link href="/accountinfo" className="mt-6">
                        <Text className="dark:text-white text-black mb-6">Account Info</Text>
                    </Link>
                    <SplitView wallpapers={libraryWallpapers} width={width} />
                </View>
            </ScrollView>
            {selectedWallpaper && <DownloadPicture isVisible={!!selectedWallpaper} onClose={() => setSelectedWallpaper(null)} wallPaper={selectedWallpaper} />}
        </>
    );
}