import React, { useCallback, useRef, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

interface DownloadPictureProps {
  isVisible: boolean;
  onClose: () => void;
}

export const DownloadPicture = ({ isVisible, onClose }: DownloadPictureProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  // snap points
  const snapPoints = ['85%'];

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onClose();
    }
    console.log('handleSheetChanges', index);
  }, [onClose]);
  
  // Effect to handle opening
  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  // renders
  return (
    <View style={styles.overlay}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    backgroundColor: 'transparent',
    pointerEvents: 'box-none',
  },
  sheetBackground: {
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: '#A0A0A0',
    width: 50,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default DownloadPicture;