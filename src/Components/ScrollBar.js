import React from "react";
import "./Styles.css";
import { ScrollView, View, Text } from "react-native";
import { range } from "lodash";

function Scrollview() {

    return (
        <View classname="bgstyle" style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <View style={{ height: 100, backgroundColor: "blue" }} />
        <ScrollView style={{ height: 100, backgroundColor: "silver" }}>
          {range(100).map(i => (
            <View>
              <Text>item {i}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={{ height: 50, backgroundColor: "blue" }} />
      </View>
    )
}

export default Scrollview
