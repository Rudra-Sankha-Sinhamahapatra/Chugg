import React, { useCallback, useEffect, ReactNode } from "react";
import { StyleSheet, View,  Modal, TouchableWithoutFeedback, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[];
}

const BottomSheetWeb = ({ isVisible, onClose, children, snapPoints = [85] }: BottomSheetProps) => {
  const translateY = useSharedValue(1000);
  const { height: screenHeight } = Dimensions.get('window');
  
  // Calculating the actual height based on the percentage in snapPoints
  const sheetHeight = (snapPoints[0] / 100) * screenHeight;
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(0, { duration: 300 });
    } else {
      translateY.value = withTiming(1000, { duration: 300 });
    }
  }, [isVisible]);

  const handleBackdropPress = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View 
              style={[
                styles.contentContainer, 
                { height: sheetHeight }, 
                animatedStyle
              ]}
            >
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  contentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: "100%",
  },
});

export default BottomSheetWeb; 