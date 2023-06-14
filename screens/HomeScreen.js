import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-feather";
import { pallete } from "../theme";
import Categories from "../components/Categories";
import { featured } from "../constans";
import FeatureRow from "../components/FeatureRow";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const marginTop = ios ? "" : " mt-2";
const HomeScreen = () => {
  return (
    <SafeAreaView className={"bg-white" + marginTop}>
      <StatusBar barStyle="light-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="flex-1 ml-2" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-400">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York , Nyc</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: pallete.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((feature, index) => {
            return (
              <FeatureRow
                key={index}
                {...feature}
                // title={feature.title}
                // restaurants={feature.restaurants}
                // description={feature.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
