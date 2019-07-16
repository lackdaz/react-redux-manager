import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
  const {onPress, children} = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    fontFamily: "Avenir",
    fontSize: 16,
    alignSelf: "center",
    color: "#007aff",
    fontWeight: "600",
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    backgroundColor: "#dcdcdc",
    marginLeft: 5,
    marginRight: 5
  }
}

export {Button}