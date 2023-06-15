import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { pallete } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsByID,
  selectCartTotal,
} from "../slices/cartSlice";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsByID(state, item.id)
  );
  const increaseHandle = () => {
    dispatch(addToCart({ ...item }));
  };
  const decreaseHandle = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ width: 100, height: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-2">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between items-center pl-3">
          <Text className="text-gray-700 text-lg font-bold">
            $ {item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: pallete.bgColor(1) }}
              onPress={decreaseHandle}
              disabled={!totalItems.length}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: pallete.bgColor(1) }}
              onPress={increaseHandle}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
