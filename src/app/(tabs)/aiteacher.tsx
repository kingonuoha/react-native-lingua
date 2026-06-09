import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-Regular",
            color: "#6b7280",
          }}
        >
          AI Teacher screen is coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}
