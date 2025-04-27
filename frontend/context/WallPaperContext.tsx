import { createContext, useState } from "react";
import { FullWallpaper, useWallpapers } from "@/hooks/useWallpapers";

interface WallPaperContextType {
    selectedWallpaper: FullWallpaper | null;
    setSelectedWallpaper: (wallpaper: FullWallpaper | null) => void;
    wallpapers: FullWallpaper[];
    toggleLike: (wallpaper: FullWallpaper) => void;
}

export const WallPaperContext = createContext<WallPaperContextType>({
    selectedWallpaper: null,
    setSelectedWallpaper: () => {},
    wallpapers: [],
    toggleLike: () => {},
});

export function WallpaperProvider({children}: {children: React.ReactNode}) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<FullWallpaper | null>(null);
  const initialWallpapers = useWallpapers();
  const [wallpapers, setWallpapers] = useState<FullWallpaper[]>(initialWallpapers);

  const toggleLike = (wallpaper: FullWallpaper) => {
    const updatedWallpapers = wallpapers.map(w => {
      if (w.url === wallpaper.url) {
        return { ...w, liked: !w.liked };
      }
      return w;
    });
    
    setWallpapers(updatedWallpapers);
    
    // If the wallpaper being liked is the currently selected one, update that too
    if (selectedWallpaper && selectedWallpaper.url === wallpaper.url) {
      setSelectedWallpaper({ ...selectedWallpaper, liked: !selectedWallpaper.liked });
    }
  };

  return (
    <WallPaperContext.Provider value={{
      selectedWallpaper,
      setSelectedWallpaper,
      wallpapers,
      toggleLike
    }}>
        {children}
    </WallPaperContext.Provider>
  );
}

