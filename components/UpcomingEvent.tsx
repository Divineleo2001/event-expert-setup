import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const UpcomingEvent = ({ title, address, date, KeyId }: any) => {
  const formatDate = (timestamp: string) => {
    const dateObj = new Date(parseInt(timestamp)); // Convert the timestamp to a Date object
    const day = String(dateObj.getDate()).padStart(2, "0"); // Get day and ensure it's 2 digits
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed, so +1)
    const year = dateObj.getFullYear(); // Get full year

    return `${day}/${month}/${year}`; // Return in "DD-MM-YYYY" format
  };
  return (
    <View key={KeyId} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {/* <View style={styles.iconContainer}>
          <FontAwesome
            name="edit"
            size={20}
            color="black"
            onPress={() => {
              console.log("Edit");
            }}
            style={styles.icon}
          />
          <FontAwesome
            name="trash"
            size={20}
            color="black"
            onPress={() => {
              console.log("Delete");
            }}
            style={styles.icon}
          />
        </View> */}
      </View>
      <Text style={{ lineHeight: 20, color: "#6e6c67", fontSize: 12 }}>
        {address}
      </Text>
      <Text>{formatDate(date)}.</Text>
    </View>
  );
};

export default UpcomingEvent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "#C7F9FF",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#0195B5",
    height: 80,
    minWidth: "90%",
  },
  bold: {
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1, // Ensures the title takes available space
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
});
