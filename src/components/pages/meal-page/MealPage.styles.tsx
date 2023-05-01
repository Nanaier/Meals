import { SxProps, Theme } from "@mui/material";

export const photo: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
};

export const photoWrapper: SxProps<Theme> = {
  p: "5rem",
};

export const textWrapper: SxProps<Theme> = {
  p: "5rem",
};
