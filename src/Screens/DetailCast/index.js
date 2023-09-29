import React, { useEffect, useState } from "react";
import Label from "components/Label";
import Item from "components/Item";

import { Image, LogBox, ScrollView, StyleSheet } from "react-native";
import { colors } from "utils/colors";
import { getData } from "api/";
import ListActing from "./atoms/list-acting";

const DetailCast = ({ route, navigation }) => {
  const [data, setData] = useState({});
  const [dataActing, setDataActing] = useState({});

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    getDetailCast();
  }, []);

  const getDetailCast = async () => {
    try {
      const resDetail = await getData(`person/${route.params}`);
      const resActing = await getData(`person/${route.params}/movie_credits`);
      setData(resDetail.data);
      setDataActing(resActing.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Item flex={1} backgroundColor={colors.BLACK} paddingVertical={10}>
      <ScrollView>
        <Item width={"100%"} justifycenter alignCenter>
          <Item
            height={180}
            width={180}
            backgroundColor={colors.WHITE}
            borderRadius={8}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`
              }}
              style={styles.imgPic}
            />
          </Item>
          <Label color={colors.WHITE} size={32}>
            {data.name}
          </Label>
        </Item>
        <Item marginTop={12} paddingHorizontal={10}>
          <Label color={colors.WHITE} size={24}>
            Personal Info
          </Label>
          <Item flexDirection={"row"}>
            <Item justifyBetween width={"60%"}>
              <Label color={colors.WHITE} size={16}>
                Known For
              </Label>
              <Label color={colors.WHITE}>
                {data.known_for_department}
              </Label>
            </Item>
            <Item>
              <Label color={colors.WHITE} size={16}>
                Known Credits
              </Label>
              <Label color={colors.WHITE}>
                {data.popularity}
              </Label>
            </Item>
          </Item>
          <Item marginTop={10}>
            <Label color={colors.WHITE} size={16}>
              Gender
            </Label>
            <Label color={colors.WHITE}>
              {data.gender === 1 ? "Woman" : data.gender === 2 ? "Man" : "-"}
            </Label>
          </Item>
          <Item marginTop={10}>
            <Label color={colors.WHITE} size={16}>
              Birthday
            </Label>
            <Label color={colors.WHITE}>
              {!data.birthday ? "-" : data.birthday}
            </Label>
          </Item>
          <Item marginTop={10}>
            <Label color={colors.WHITE} size={16}>
              Place Of Birth
            </Label>
            <Label color={colors.WHITE}>
              {!data.place_of_birth ? "-" : data.place_of_birth}
            </Label>
          </Item>
          <Item marginTop={10}>
            <Label color={colors.WHITE} size={16}>
              Biograpy
            </Label>
            <Label color={colors.WHITE}>
              {!data.biography ? "-" : data.biography}
            </Label>
          </Item>
          <Item marginTop={10}>
            <Item marginBottom={10}>
              <Label size={16} color={colors.WHITE}>
                Acting
              </Label>
            </Item>
            <ListActing data={dataActing.cast} navigation={navigation} />
          </Item>
        </Item>
      </ScrollView>
    </Item>
  );
};

export default DetailCast;

const styles = StyleSheet.create({
  imgPic: {
    height: 180,
    width: 180,
    borderRadius: 8
  }
});
