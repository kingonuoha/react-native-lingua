import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TabBarProps = any;

const ICONS = [
  "home-outline",
  "book-open-variant",
  "robot",
  "chat-outline",
  "account-circle-outline",
];
const LABELS = ["Home", "Learn", "AI Teacher", "Chat", "Profile"];

export default function CustomTabBar({ state, navigation }: TabBarProps) {
  const { width } = useWindowDimensions();
  const tabCount = state.routes.length;
  const tabWidth = width / tabCount;

  return (
    <View className="bg-white border-t border-gray-200 py-3">
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route: any, idx: number) => {
          const focused = state.index === idx;
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              onPress={() => navigation.navigate(route.name)}
              style={{
                width: tabWidth,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name={ICONS[idx] as any}
                size={24}
                color={focused ? "#6c4ef5" : "#6b7280"}
              />
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: focused ? "#6c4ef5" : "#6b7280",
                  fontFamily: "Poppins-Regular",
                }}
              >
                {LABELS[idx]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
