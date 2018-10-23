export type Color =
  | GeneralColor
  | DataBarColor
  | DataLineColor
  | DivergingColor
  | UNSAFE_NonStandardColors;

export enum GeneralColor {
  Teal = "#009AA6",
  Turquoise = "#00CCCC",
  PaleGrey = "#F1F1F2",
  LightGrey = "#B2B2B2",
  Grey = "#D8D8D8",
  MidGrey = "#999999",
  DarkGrey = "#666666",
  Black = "#10161B",
  White = "#FFFFFF",
  Hint = "#BBBDBF"
}

export enum DataBarColor {
  LightGold = "#9E9459",
  LightPaleGold = "#CBBC5B",
  LightYellow = "#EFEF38",
  LightGreen = "#33C08F",
  LightPaleBlue = "#6ED6FF",
  LightPink = "#DE9BC0",
  LightDarkBlue = "#3396C7"
}

export enum DataLineColor {
  Gold = "#867A30",
  PaleGold = "#BEAB32",
  Yellow = "#EAEA06",
  Green = "#00B072",
  PaleBlue = "#4ACCFF",
  DarkBlue = "#007CB9",
  Pink = "#D682B0"
}

export enum DivergingColor {
  A5 = "#4E2508",
  A4 = "#8F5017",
  A3 = "#B7793A",
  A2 = "#DCB887",
  A1 = "#EEDDC7",
  MID = "#F5F5F5",
  B1 = "#CAE4E6",
  B2 = "#8CC8CC",
  B3 = "#3E9397",
  B4 = "#11696F",
  B5 = "#003638"
}

export enum UNSAFE_NonStandardColors {
  LightBlue = "#B7E3F5"
}
