import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import React from "react";
import { featured } from "../constans";
import { pallete } from "../theme";

const DeliveryScreen = ({ navigation }) => {
  const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={pallete.bgColor(1)}
        />
      </MapView>
      <View className="rounded-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20 - 30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own way !
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View
          style={{ backgroundColor: pallete.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            className="p-1 rounded-full"
          >
            <Image
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={pallete.bgColor(1)}
                stroke={pallete.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={() => navigation.navigate("Home")}
            >
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
