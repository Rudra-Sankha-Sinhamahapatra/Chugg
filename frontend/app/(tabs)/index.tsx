import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { Image, Text, View, FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const wallpapers = useWallpapers();
  const { width } = useWindowDimensions();

  const itemWidth = (width - 80) / 2;
  
  const renderWallpaperItem = ({ item }: { item: Wallpaper }) => (
    <View className="p-1" style={{ width: itemWidth }}>
      <ImageCard
        wallpaper={item}
        className="rounded-lg overflow-hidden"
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            className="flex-1 w-full h-full"
            style={{ resizeMode: "cover" }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/w5pvrAMDSgGuXYTZXrIWOg",
            }}
          />
        }
      >
        <View className="pb-6">
          <Text className="dark:text-white text-black mb-4">Explore Page</Text>
          <Link href="/accountinfo">
            <Text className="dark:text-white text-black mb-6">Account Info</Text>
          </Link>

          <View className="mt-2 px-2">
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
          </View>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}