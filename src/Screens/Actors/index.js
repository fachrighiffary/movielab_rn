import React from "react";
import Item from "components/Item";
import Label from "components/Label";
import CardActors from "./atoms/card-actors";

import { getData } from "api/";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { colors } from "utils/colors";

const Actors = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [canFetchNextPage, setCanFetchNextPage] = useState(true);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getActors();
  }, []);

  const getActors = async () => {
    try {
      if (page > 1 && canFetchNextPage) setLoadMore(true);
      if (canFetchNextPage) {
        const res = await getData(`person/popular`, page);
        setCanFetchNextPage(page < res.last_page);
        setPage(page + 1);
        if (page > 1) {
          setLoadMore(false);
          setData([...data, ...res.data.results]);
        } else {
          setData(res.data.results);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Item
      flex
      backgroundColor={colors.BLACK}
      paddingHorizontal={10}
      paddingVertical={10}
      paddingBottom={30}
    >
      <Label size={28} color={colors.WHITE}>
        List Actors
      </Label>
      <Item marginTop={10}>
        <CardActors
          data={data}
          navigation={navigation}
          getData={getActors}
          loadMore={loadMore}
        />
      </Item>
    </Item>
  );
};

export default Actors;

const styles = StyleSheet.create({});
