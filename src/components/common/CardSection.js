import React from "react";
import { View } from "react-native";

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    positive: "relative",
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
};

export {CardSection}
