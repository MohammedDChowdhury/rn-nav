import { View, Text, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is Home</Text>
      <Button
        onPress={() => navigation.navigate("Second")}
        title="Go to second screen!"
      />
    </SafeAreaView>
  );
};

export default Home;
