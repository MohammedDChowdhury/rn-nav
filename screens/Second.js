import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Second = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is the second screen</Text>
      <Button
        onPress={() => navigation.navigate("Modal")}
        title="Open Modal!"
      ></Button>
    </SafeAreaView>
  );
};

export default Second;
