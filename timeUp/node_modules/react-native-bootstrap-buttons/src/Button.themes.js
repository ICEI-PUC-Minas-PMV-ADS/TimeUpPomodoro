import colors from "./Button.colors";

export const addTheme = ( name, labelColor, disabledLabelColor, bgColor, disabledBgColor ) => {
  return Object.assign(themes, {
    [name]: {
      style: ( isDisabled ) => ({
        "themeContainer": {
          backgroundColor: isDisabled ? disabledBgColor : bgColor
        },
        "themeLabel": {
          color: isDisabled ? disabledLabelColor : labelColor
        },
      })
    }
  });
};

let themes = {};

Object.keys(colors).forEach( key =>
  addTheme(
    key,
    colors[key].labelColor,
    colors[key].disabledLabelColor,
    colors[key].bgColor,
    colors[key].disabledBgColor
  )
);

export default themes;
