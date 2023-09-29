import React from "react";
import Item from "components/Item";
import Label from "components/Label";

import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { colors } from "utils/colors";

const CardActors = ({ data, navigation, getData, loadMore }) => {
  return (
    <FlatList
      columnWrapperStyle={{ justifyContent: "space-around" }}
      numColumns={2}
      data={data}
      keyExtractor={(item, index) => item.id}
      ListFooterComponent={() =>
        <Item>
          {loadMore ? <ActivityIndicator color="#4d2e9b" size="large" /> : null}
        </Item>}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailCast", item.id);
            }}
          >
            <Item
              height={250}
              width={180}
              backgroundColor={colors.WHITE}
              marginBottom={10}
              borderRadius={10}
            >
              <Item height={200} width={180}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  }}
                  style={styles.imgActors}
                />
              </Item>
              <Item paddingHorizontal={8}>
                <Label color={colors.BLACK}>
                  {item.name}
                </Label>
                <Label color={colors.BLACK}>
                  Known For : {item.known_for_department}
                </Label>
              </Item>
            </Item>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CardActors;

const styles = StyleSheet.create({
  imgActors: {
    height: 200,
    width: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});
