export const PlatformBackgroundColor: string = "#f7f7fc";

// Pallete colors
export const ColorPinkDark: string = "#840A36";
export const ColorGrayDark: string = "#A0A3BD";
export const ColorGrayDark2: string = "#5D6A72";

export const ColorPink: string = "#E5105D";
export const ColorGray: string = "#B7BBBC";
export const ColorOrange: string = "#FF8F15";
export const ColorYellow: string = "#FFCB15";
export const ColorGreen: string = "#37B134";
export const ColorBlue: string = "#3D85C3";
export const ColorGray2: string = "#ECECEC";

export const ColorPinkLight: string = "#FACFDF";
export const ColorGrayLight: string = "#D9DBE9";

export const ColorPinkDisabled: string = "#ED91AB";
export const ColorGrayDisabled: string = "#6E7191";

export const ColorPureWhite: string = "#FFF";
export const ColorWhite: string = "#F9F9FA";
export const ColorPureBlack: string = "#000";

// Feedback colors
export const ColorError: string = "#E40173";
export const ColorErrorLight: string = "#FFE5F2";
export const ColorWarning: string = "#DCC80F";
export const ColorWarningLight: string = "#FEFEE5";
export const ColorInfo: string = "#1976d2";
export const ColorInfoLight: string = "#C7E9FF";
export const ColorSuccess: string = "#00CC67";
export const ColorSuccessLight: string = "#E5FFF2";

export const FontBase: string = "Titillium Web";

// Typography Styles
interface IFont {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;
    fontStyle: string;
    color: string;
    fontFamily: string;
}

export const TextSmallFont: IFont = {
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0.25px",
    fontStyle: "normal",
    color: ColorPureBlack,
    fontFamily: FontBase,
};

