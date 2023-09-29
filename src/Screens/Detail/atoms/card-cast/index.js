import React from "react";
import Item from "components/Item";
import Label from "components/Label";

import { colors } from "utils/colors";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CardCast = ({ data, navigation }) => {
  return (
    <Item marginTop={18}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailCast", item.id);
              }}
            >
              <Item
                height={260}
                width={160}
                backgroundColor={colors.WHITE}
                borderRadius={12}
                marginRight={10}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  }}
                  style={styles.imgCast}
                />
                <Item paddingVertical={8} paddingHorizontal={8}>
                  <Label>
                    {item.name}
                  </Label>
                  <Label>
                    {item.character}
                  </Label>
                </Item>
              </Item>
            </TouchableOpacity>
          );
        }}
      />
    </Item>
  );
};

export default CardCast;

const styles = StyleSheet.create({
  imgCast: {
    height: 180,
    width: 160,
    resizeMode: "cover"
  }
});
