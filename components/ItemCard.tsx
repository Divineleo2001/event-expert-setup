import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ItemCard = ({
  keyId,
  title,
  imageUrl,
  price,
  ShowPrice,
}: {
  keyId: number;
  title: string;
  imageUrl: string;
  price: number;
  ShowPrice: boolean;
}) => {
  return (
    <View key={keyId} style={styles.container}>
      <Text style={styles.TextStyle}>{title}</Text>

      {ShowPrice ? (
        <>
          <Image source={{ uri: `${imageUrl}` }} width={80} height={80} />
          <Text style={styles.PriceText}>Rs. {price}</Text>
        </>
      ) : (
        <Image
          source={{ uri: `${imageUrl}` }}
          width={80}
          height={80}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    maxWidth: 110,
    borderWidth: 1,
    margin: 5,
    borderRadius: 4,
  },
  TextStyle: {
    textAlign: "center",
    width: "100%",
    fontSize: 10,
    marginBottom: 2,
    marginTop: 2,
    fontFamily: "MontserratMedium",
  },
  PriceText: {
    marginTop: 3,
    marginBottom: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 10,
    backgroundColor: "#fef100",
    fontFamily: "MontserratMedium",
  },
  image: {
    marginBottom: 8,
  },
});
