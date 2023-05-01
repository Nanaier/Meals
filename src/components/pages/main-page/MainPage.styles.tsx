import { SxProps, Theme } from "@mui/material";

export const mainWrapper: SxProps<Theme> = {
  minHeight: "100vh",
  position: "relative",
};

export const textWrapper: SxProps<Theme> = {
  m: "2rem 5rem",
  p: "1rem 2rem",
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

export const dataWrapper: SxProps<Theme> = {
  padding: "2rem",
};

export const paginationWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  pt: "1rem",
  pb: "4rem",
};
