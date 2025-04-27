import { FlatList } from "react-native";
import { ThemedView } from "./ThemedView";
import { View } from "react-native";
import { Link } from "expo-router";
import { Text } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
import { ImageCard } from "./ImageCard";
import { WallPaperContext } from "@/context/WallPaperContext";
import { useContext } from "react";

interface SplitViewProps {
    wallpapers: Wallpaper[];
    width: number;
}

export default function SplitView({wallpapers,width}: SplitViewProps) {
    const {selectedWallpaper,setSelectedWallpaper} = useContext(WallPaperContext);

    const itemWidth = (width - 80) / 2;
  
    const renderWallpaperItem = ({ item }: { item: Wallpaper }) => (
      <ThemedView className="p-1" style={{ width: itemWidth }}>
        <ImageCard
        onPress={() =>{ setSelectedWallpaper(item)}}
          wallpaper={item}
          className="rounded-lg overflow-hidden"
        />
      </ThemedView>
    );

    return (
        <View className="pb-6">
          <Text className="dark:text-white text-black mb-4">Explore Page</Text>
          <Link href="/accountinfo">
            <Text className="dark:text-white text-black mb-6">Account Info</Text>
          </Link>

          <ThemedView className="mt-2 px-2">
            <FlatList
              data={wallpapers}
              renderItem={renderWallpaperItem}
              keyExtractor={(_, index) => `wallpaper-${index}`}
              numColumns={2}
              scrollEnabled={false}
              initialNumToRender={4}
              maxToRenderPerBatch={10}
              windowSize={5}
              removeClippedSubviews={true}
              style={{ width: '100%' }}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
          </ThemedView>
        </View>
    )
}