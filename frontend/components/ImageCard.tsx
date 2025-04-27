import { FullWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { Image, Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

export function ImageCard({ wallpaper, className,onPress }: { wallpaper: FullWallpaper, className?: string,onPress?:() => void }) {
  const { isDark } = useTheme();
  

  return (
    <Pressable onPress={onPress}>
    <View className={`w-full h-[320px] overflow-hidden relative ${className || ''}`}>
      <Image 
        source={{ uri: wallpaper.url }} 
        className="w-full h-full rounded-lg"
        style={{ resizeMode: 'cover' }}
      />
      <View className="flex flex-row bg-black/50 absolute bottom-0 left-0 right-0 p-2 text-white rounded w-full justify-between">
      <ThemedText className="max-sm:max-w-[130px] text-sm font-medium" lightColor="white" darkColor="white" >{wallpaper.name}</ThemedText>
      <Ionicons
      name="heart"
      size={18}
      className="my-auto"
      color={wallpaper.liked ? '#FF1493' : 'white'}
      />
      </View>
    </View>
    </Pressable>
  );
}
