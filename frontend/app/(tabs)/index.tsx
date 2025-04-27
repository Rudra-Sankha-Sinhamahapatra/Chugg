import DownloadPicture from "@/components/DownLoadButton"; 
import ParallaxScrollView from "@/components/ParallaxScrollView";
import SplitView from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Image, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WallPaperContext, WallpaperProvider } from "@/context/WallPaperContext";
import { useContext } from "react";

export default function explore() {
  return (
   <WallpaperProvider>
    <ExploreScreen/>
   </WallpaperProvider>
  );
}

function ExploreScreen() {
  const wallpapers = useWallpapers();
  const { width } = useWindowDimensions();
  const { selectedWallpaper, setSelectedWallpaper } = useContext(WallPaperContext);
  
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
        <SplitView wallpapers={wallpapers} width={width} />
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture isVisible={!!selectedWallpaper} onClose={()=> setSelectedWallpaper(null)} wallPaper={selectedWallpaper} />}
    </SafeAreaView>
  )
}