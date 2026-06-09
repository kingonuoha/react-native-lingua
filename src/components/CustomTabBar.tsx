import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

type TabBarProps = BottomTabBarProps;

const ROUTE_CONFIG: Record<string, { icon: string; label: string }> = {
  home: { icon: "home-outline", label: "Home" },
  courses: { icon: "book-open-variant", label: "Learn" },
  lessons: { icon: "robot", label: "AI Teacher" },
  profile: { icon: "account-circle-outline", label: "Profile" },
};

export default function CustomTabBar({ state, navigation }: TabBarProps) {
  const { width } = useWindowDimensions();
  const tabCount = state.routes.length;
  const tabWidth = width / tabCount;

  return (
    <View className="bg-white border-t border-gray-200 py-3">
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, idx: number) => {
          const focused = state.index === idx;
          const config = ROUTE_CONFIG[route.name] ?? {
            icon: "help-circle-outline",
            label: route.name,
          };
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
                name={config.icon}
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
                {config.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
