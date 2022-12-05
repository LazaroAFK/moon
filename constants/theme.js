export const COLORS = {
  primary: "#7c2d12", // "#001F2D",
  secondary: "#7c2d1220", // "#4D626C",
  shadow: "#292524", // "#4D626C",

  white: "#F2F2F2", // "#FFF",
  gray: "#fff7ed99", // "#74858C",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "Roboto",
  semiBold: "Roboto",
  medium: "Roboto",
  regular: "Roboto",
  light: "Roboto",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
