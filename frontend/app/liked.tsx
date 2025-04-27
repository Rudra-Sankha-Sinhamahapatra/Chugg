import SplitView from "@/components/SplitView";
import { Link } from "expo-router";
import { useWindowDimensions, View, Text } from "react-native";
import { ScrollView } from "react-native";
import { WallPaperContext } from "@/context/WallPaperContext";
import { useContext } from "react";
import DownloadPicture from "@/components/DownLoadButton";

export default function Liked () {
    const { width } = useWindowDimensions();
    const { selectedWallpaper, setSelectedWallpaper, wallpapers } = useContext(WallPaperContext);

    const likedWallpapers = wallpapers.filter(wallpaper => wallpaper.liked);

    return (
        <>
            <ScrollView className="flex-1">
                <View className="container">
                    <Link href="/accountinfo" className="mt-6">
                        <Text className="dark:text-white text-black mb-6">Account Info</Text>
                    </Link>
                    <SplitView wallpapers={likedWallpapers} width={width} />
                </View>
            </ScrollView>
            {selectedWallpaper && <DownloadPicture isVisible={!!selectedWallpaper} onClose={() => setSelectedWallpaper(null)} wallPaper={selectedWallpaper} />}
        </>
    );
}