import React from "react";
import { View, Text, Button } from "react-native";

export default function Home(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to profile settings"
        onPress={() => props.navigation.navigate("ProfileSettings")}
      />
    </View>
  );
}
