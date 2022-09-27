/* @flow weak */

import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import styles from "./Button.styles.js"
import themes from "./Button.themes.js";

const CURVED = "curved";
const ROUNDED = "rounded";
const SQUARE = "square";

const Button = ({
  onPress,
  label,
  labelStyle,
  containerStyle,
  disabled,
  buttonType,
  curved,
  rounded,
  square,
}) => {
  const { themeContainer, themeLabel } = themes[buttonType].style(disabled);
  let buttonStyle = CURVED;

  if ( rounded ) {
    buttonStyle = ROUNDED;
  } else if ( square ) {
    buttonStyle = SQUARE;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles[buttonStyle], themeContainer, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonLabel, themeLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  label: "",
  containerStyle: {},
  labelStyle: {},
  disabled: false,
  buttonType: "primary",
  onPress: null,
  rounded: false,
  square: false,
  curved: true,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPresS: PropTypes.func,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  buttonStyle: PropTypes.oneOf(Object.keys(themes)),
  labelStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};
export default Button;
