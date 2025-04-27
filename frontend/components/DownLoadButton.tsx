import React, { useCallback, useRef, useEffect } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Platform } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";
import { ThemedText } from "./ThemedText";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetWeb from "./BottomSheetWeb";

// Config to silence findDOMNode warnings on web
const bottomSheetConfig = Platform.OS === 'web' 
  ? { unstable_enableUserSelectHack: true, enableFlashScrollableIndicator: false } 
  : {};

interface DownloadPictureProps {
  isVisible: boolean;
  onClose: () => void;
  wallPaper?: Wallpaper;
}

export const DownloadPicture = ({
  isVisible,
  onClose,
  wallPaper,
}: DownloadPictureProps) => {
  const { isDark } = useTheme();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snap points
  const snapPoints = ["85%"];
  const snapPointsWeb = [85]; // For web bottom sheet (percentage)

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
      console.log("handleSheetChanges", index);
    },
    [onClose]
  );

  // Effect to handle opening
  useEffect(() => {
    if (Platform.OS !== 'web' && bottomSheetRef.current) {
      if (isVisible) {
        bottomSheetRef.current?.expand();
      } else {
        bottomSheetRef.current?.close();
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const contentComponent = (
    <View style={styles.contentContainer}>
      <Image
        style={styles.image}
        className="w-full h-full rounded-lg"
        source={{ uri: wallPaper?.url || "" }}
      />
      <View
        className="absolute left-5 top-5 z-50 p-2 rounded-full bg-black/50 "
        style={styles.IconView}
      >
        <Ionicons
          name="close"
          size={18}
          onPress={onClose}
          className="my-auto"
          color={isDark ? "#FF1493" : "white"}
        />
      </View>
      <View
        className="flex flex-row gap-2 absolute right-5 top-2 z-50 p-2 rounded-full "
        style={styles.IconView}
      >
        <Ionicons
          name="share"
          size={18}
          onPress={onClose}
          className="my-auto bg-black/50 rounded-full p-2"
          color={isDark ? "#FF1493" : "white"}
        />
               <Ionicons
          name="heart"
          size={18}
          onPress={onClose}
          className="my-auto bg-black/50 rounded-full p-2"
          color={isDark ? "#FF1493" : "white"}
        />
      </View>

      <View className="flex flex-col justify-center items-center">
        <ThemedText className="mt-3 font-bold text-3xl">{wallPaper?.name}</ThemedText>
        <TouchableOpacity className="flex flex-row button mt-5 w-fit">
          <Ionicons name="download" size={18} color={isDark ? "#FF1493" : "white"} />
          <Text className="text-white text-center px-2">Download </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // BottomSheet for web
  if (Platform.OS === 'web') {
    return (
      <BottomSheetWeb 
        isVisible={isVisible} 
        onClose={onClose}
        snapPoints={snapPointsWeb}
      >
        {contentComponent}
      </BottomSheetWeb>
    );
  }

  // renders
  return (
    <View style={styles.overlay}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        style={{ paddingTop: 0 }}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        handleStyle={{ display: "none" }}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.indicator}
        {...bottomSheetConfig}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image
            style={styles.image}
            className="w-full h-full rounded-lg"
            source={{ uri: wallPaper?.url || "" }}
          />
          <View
            className="absolute left-5 top-5 z-50 p-2 rounded-full bg-black/50 "
            style={styles.IconView}
          >
            <Ionicons
              name="close"
              size={18}
              onPress={onClose}
              className="my-auto"
              color={isDark ? "#FF1493" : "white"}
            />
          </View>
          <View
            className="flex flex-row gap-2 absolute right-5 top-2 z-50 p-2 rounded-full "
            style={styles.IconView}
          >
            <Ionicons
              name="share"
              size={18}
              onPress={onClose}
              className="my-auto bg-black/50 rounded-full p-2"
              color={isDark ? "#FF1493" : "white"}
            />
                   <Ionicons
              name="heart"
              size={18}
              onPress={onClose}
              className="my-auto bg-black/50 rounded-full p-2"
              color={isDark ? "#FF1493" : "white"}
            />
          </View>
   
          <View className="flex flex-col justify-center items-center">
            <ThemedText className="mt-3 font-bold text-3xl">{wallPaper?.name}</ThemedText>
            <TouchableOpacity className="flex flex-row button mt-5 w-fit">
              <Ionicons name="download" size={18} color={isDark ? "#FF1493" : "white"} />
              <Text className="text-white text-center px-2">Download </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    backgroundColor: "transparent",
    pointerEvents: "box-none",
  },
  sheetBackground: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "#A0A0A0",
    width: 50,
    display: "none",
  },
  contentContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  image:{
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "80%",
    width: "100%",
  },
  IconView:{
    borderRadius: 50,
  }
});

export default DownloadPicture;
