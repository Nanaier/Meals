import { SxProps, Theme } from "@mui/material";


export const card: SxProps<Theme> ={
    width: '100%',
    display:'flex',
    justifyContent: 'center',
    height: '100%',
}

export const photo: SxProps<Theme> ={
    width: '100%',
    height: '10rem',
    objectFit: "cover",
    borderRadius:'2px'

}

export const wrapper: SxProps<Theme> ={
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0.5rem',

}

export const contentWrapper: SxProps<Theme> ={
    padding: '0.5rem',
}

export const textWrapper: SxProps<Theme> ={
    padding: '0.5rem',
}

