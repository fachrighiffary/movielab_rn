import React from "react";
import Item from "components/Item";
import Label from "components/Label";
import Carousel from "react-native-anchor-carousel";
import CardMovie from "./atoms/card-movie";

import { useEffect, useState } from "react";
import { getData, LIST_MOVIE } from "api/";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "utils/colors";
import { onDataMovie } from "../../Redux/actions/movieAction";

const DeviceWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const listDataMovie = useSelector(state => state.movies.data);

  useEffect(() => {
    getDataMovie();
  }, []);

  const getDataMovie = async () => {
    try {
      const res = await getData(`${LIST_MOVIE}popular`, page);
      setLoading(false);
      dispatch(
        onDataMovie([
          { key: "left-spacer" },
          ...res.data.results,
          { key: "right-spacer" }
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item, index }) => {
    if (item.key) {
      return null;
    }
    return <CardMovie navigation={navigation} item={item} key={index} />;
  };

  return (
    <Item flex backgroundColor={colors.BLACK} paddingHorizontal={10}>
      <Item justifycenter alignCenter marginTop={18}>
        <Label color={colors.WHITE} size={38}>
          MOVIE LAB
        </Label>
      </Item>
      {loading
        ? <Item flex alignCenter justifycenter>
            <ActivityIndicator size={"large"} color={colors.WHITE} />
          </Item>
        : <Carousel
            initialIndex={1}
            style={styles.carousel}
            data={listDataMovie}
            renderItem={renderItem}
            itemWidth={DeviceWidth - 100}
            inActiveOpacity={0.3}
            separatorWidth={0}
          />}
    </Item>
  );
};

export default Home;

const styles = StyleSheet.create({
  carousel: {
    flex: 1
  }
});
