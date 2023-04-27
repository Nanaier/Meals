import { SxProps, Theme } from "@mui/material";

export const mainWrapper: SxProps<Theme> = {
  minHeight: "100vh",
  position: "relative",
};

export const textWrapper: SxProps<Theme> = {
  mt: "2rem",
  mb: "2rem",
  mr: "5rem",
  ml: "5rem",
  pt: "1rem",
  pb: "1rem",
  pr: "2rem",
  pl: "2rem",
  textAlign: "justify",
  backgroundColor: "#E3FDFD",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const mainText: SxProps<Theme> = {
  textAlign: "center",
};
