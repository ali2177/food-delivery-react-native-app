import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const OrderPreparingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // move to deliveryscreen
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        className="h-80 w-80"
        source={require("../assets/images/delivery.gif")}
      />
    </View>
  );
};

export default OrderPreparingScreen;
