import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  styled,
} from "@mui/material";
import {
  ColorGray,
  ColorGrayDisabled,
  ColorPureBlack,
  ColorPureWhite
} from "../Theme";

const BASE_PROPS = {
  height: "56px",
  borderRadius: "16px",
  background: ColorPureWhite,
  display: "inline-flex",
  paddingLeft: "10px",
  justifyContent: "center",
};

const CustomContainedTextField = styled((props: MuiTextFieldProps) => (
  <MuiTextField {...props} />
))(({ multiline }) => ({
  "& .MuiInputBase-root": {
    ...BASE_PROPS,
    "& fieldset": {
      borderColor: "1px solid " + ColorGray,
    },
    "&:hover fieldset": {
      border: ColorPureBlack,
      borderStyle: "solid",
    },
    "&.Mui-focused fieldset": {
      border: ColorGray,
      borderStyle: "solid",
    },
    "&.Mui-disabled fieldset": {
      opacity: 0.3,
      background: ColorGrayDisabled,
      border: ColorPureBlack,

    },
    height: multiline ? "auto" : "100%",
  },

}));

export default function TextField(muiProps: MuiTextFieldProps) {
  return (
    <CustomContainedTextField
      {...muiProps}
    />
  );
}