import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import CardMovie from "screens/Home/atoms/card-movie";
import Item from "components/Item";
import Label from "components/Label";
import { colors } from "utils/colors";

const ListActing = ({ data, navigation }) => {
  return (
    <Item>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={data}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => {
          return (
            <Item marginBottom={10}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                  navigation.navigate("Detail", item.id);
                }}
              >
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  }}
                  style={styles.imageBackground}
                >
                  <View style={styles.rightTextContainer}>
                    <Text style={styles.rightText}>
                      {item.original_language}
                    </Text>
                  </View>
                  <View style={styles.badge}>
                    <Label color={colors.WHITE} bold>
                      {item.vote_average.toFixed(1)}
                    </Label>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <Item marginTop={18} width={160}>
                <Label color={colors.WHITE} size={14}>
                  {item.original_title}
                </Label>
                <Label color={colors.WHITE}>
                  {item.release_date}
                </Label>
              </Item>
            </Item>
          );
        }}
      />
    </Item>
  );
};

export default ListActing;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 160,
    height: 300,
    alignSelf: "center"
  },
  imageBackground: {
    flex: 2,
    backgroundColor: "#EBEBEB",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
    position: "relative"
  },
  rightTextContainer: {
    marginLeft: "auto",
    marginRight: 12,
    backgroundColor: "red",
    padding: 5,
    marginTop: 3,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  rightText: {
    color: "white"
  },
  lowerContainer: {
    justifyContent: "flex-end",
    margin: 10,
    backgroundColor: "red"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  contentText: {
    marginTop: 10,
    fontSize: 12
  },
  badge: {
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderRadius: 25,
    position: "absolute",
    left: -20,
    bottom: -20,
    borderWidth: 5,
    borderColor: colors.WHITE,
    justifyContent: "center",
    alignItems: "center"
  }
});
