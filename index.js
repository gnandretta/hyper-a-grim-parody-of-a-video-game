"use stict";

const bg = "#6C608E";
const fg = "#F7E680";
const border = "#594B7C";
const cursor = "#67B1E5";
const selection = "#F15195";

const black = "#594B7C";
const red = "#FD98A9";
const green = "#86D7CA";
const yellow = "#FFFFFF";
const blue = "#92E8FE";
const magenta = "#FD94D0";
const cyan = "#92E8FE";
const white = "#EAF1F5";
const lightWhite = "#EEF4F8";

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: bg,
    foregroundColor: fg,
    borderColor: border,
    cursorColor: cursor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite
    },
    termCSS: `
      ::selection {
        background: ${selection} !important;
      }
    `
  });
