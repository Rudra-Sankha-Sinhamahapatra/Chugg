import { createContext, useState } from "react";
import { Wallpaper } from "@/hooks/useWallpapers";

interface WallPaperContextType {
    selectedWallpaper: Wallpaper | null;
    setSelectedWallpaper: (wallpaper: Wallpaper | null) => void;
}

export const WallPaperContext = createContext<WallPaperContextType>({
    selectedWallpaper: null,
    setSelectedWallpaper: () => {},
});

export function WallpaperProvider({children}: {children: React.ReactNode}) {
  const [selectedWallpaper,setSelectedWallpaper] = useState<Wallpaper | null>(null);

  return (
    <WallPaperContext.Provider value={{selectedWallpaper,setSelectedWallpaper}}>
        {children}
    </WallPaperContext.Provider>
  )

}

