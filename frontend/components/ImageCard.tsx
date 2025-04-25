import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, View } from "react-native";

export function ImageCard({ wallpaper, className }: { wallpaper: Wallpaper, className?: string }) {
  return (
    <View className={`w-full h-[320px] overflow-hidden ${className || ''}`}>
      <Image 
        source={{ uri: wallpaper.url }} 
        className="w-full h-full"
        style={{ resizeMode: 'cover' }}
      />
    </View>
  );
}
