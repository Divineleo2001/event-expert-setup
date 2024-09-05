// NewFormPage.tsx
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import EventField from "@/components/EventField";
// import ImageHandler from "@/components/ImageHandler";
import ActionButton from "@/components/ActionButton";
import { Feather } from "@expo/vector-icons";
import { router } from "react-query-kit";
import { useRouter } from "expo-router";

const NewFormPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expectedCost, setExpectedCost] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleBack = () => {
    Alert.alert("Back", "Back button clicked!");
  };

  const router = useRouter();

  const handleBackPress = () => {
    router.push("/(root)/(screen)/(menu)/eventitem");
  };

  const handleSubmit = () => {
    Alert.alert("Submit", "Submit button clicked!");
  };

  return (
    <>
      <View style={styles.DrawerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.DrawerText}>Add Item</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <EventField
            title="Name"
            value={name}
            placeholder="Enter name"
            handleChangeText={setName}
          />
          <EventField
            title="Category"
            value={category}
            placeholder="Enter category"
            handleChangeText={setCategory}
          />
          <EventField
            title="Description"
            value={description}
            placeholder="Enter description"
            handleChangeText={setDescription}
          />
          <EventField
            title="Expected Cost"
            value={expectedCost}
            placeholder="Enter expected cost"
            keyboardType="numeric"
            handleChangeText={setExpectedCost}
          />
          {/* <ImageHandler imageUri={imageUri} setImageUri={setImageUri} /> */}
        </View>

        <View style={styles.footer}>
          <ActionButton
            label="Back"
            onPress={handleBack}
            enabled={true}
            style={styles.footerButton}
          />
          <ActionButton
            label="Submit"
            onPress={handleSubmit}
            enabled={isSubmitEnabled}
            style={styles.footerButton}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -80,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#f8f8f8",
  },
  footerButton: {
    width: "45%",
  },
  DrawerContainer: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Vertically center items
    padding: 10,
    marginTop: 25,
    borderBottomWidth: 0.5,
  },
  DrawerText: {
    fontSize: 20,
    fontFamily: "MontserratMedium",
    marginLeft: 30, // Add some spacing between the arrow and the text
  },
  scrollView: {
    height: 200,
    marginTop: "25%",
  },
});

export default NewFormPage;
