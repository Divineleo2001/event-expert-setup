import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const PastEvent = ({ title, address, date, KeyId }: any) => {
  const formatDate = (timestamp: string) => {
    const dateObj = new Date(parseInt(timestamp));
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
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
      <Text style={{ lineHeight: 20, color: "#c2c0ba", fontSize: 12 }}>
        {address}
      </Text>
      <Text>{formatDate(date)}.</Text>
    </View>
  );
};

export default PastEvent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#838383",
    height: 80,
    minWidth: "90%",
  },
  icon: {
    marginLeft: 15,
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
});
