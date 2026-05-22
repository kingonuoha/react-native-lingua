import React from "react";
import { View, Text } from "react-native";

type Props = {
  message?: string | null;
  suggestions?: string[] | null;
};

export default function FormError({ message, suggestions }: Props) {
  if (!message && (!suggestions || suggestions.length === 0)) return null;

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
      {message ? (
        <Text style={{ color: "#dc2626", fontSize: 13, marginBottom: suggestions?.length ? 6 : 0 }}>
          {message}
        </Text>
      ) : null}

      {suggestions && suggestions.length > 0 ? (
        <View style={{ backgroundColor: "#FEF3F2", padding: 8, borderRadius: 8 }}>
          {suggestions.map((s, i) => (
            <Text key={i} style={{ color: "#b91c1c", fontSize: 13, marginBottom: i === suggestions.length - 1 ? 0 : 6 }}>
              • {s}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}
