import React from "react";
import { Text, View } from "react-native";

const Header = ({children}) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#0A51A1",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 48,
    fontFamily: 'Avenir',
    color: '#FFF',
    fontWeight: '900',
  }
};

export {Header};
