import DownloadPicture from "@/components/DownLoadButton"; 
import ParallaxScrollView from "@/components/ParallaxScrollView";
import SplitView from "@/components/SplitView";
import { Image, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WallPaperContext } from "@/context/WallPaperContext";
import { useContext } from "react";
import { Link } from "expo-router";

export default function explore() {
  const { width } = useWindowDimensions();
  const { selectedWallpaper, setSelectedWallpaper, wallpapers } = useContext(WallPaperContext);
  
  return (
    <SafeAreaView className="flex-1">
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            className="flex-1 w-full h-full"
            style={{ resizeMode: "cover" }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/MbKPsa9KQtGV9uPXhyOFpg",
            }}
          />
        }
      >
           <Text className="dark:text-white text-black mb-4">Explore Page</Text>
           <Link href="/accountinfo">
            <Text className="dark:text-white text-black mb-6">Account Info</Text>
          </Link>
        <SplitView wallpapers={wallpapers} width={width} />
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture isVisible={!!selectedWallpaper} onClose={()=> setSelectedWallpaper(null)} wallPaper={selectedWallpaper} />}
    </SafeAreaView>
  );
}