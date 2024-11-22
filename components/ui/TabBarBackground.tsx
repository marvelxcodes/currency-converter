import { View } from "react-native";

const TabBarBackground = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding:100,
        height:200
      }}
    ></View>
  );
};

export default TabBarBackground;

export function useBottomTabOverflow() {
  return 0;
}
