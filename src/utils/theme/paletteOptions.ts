import { PaletteMode, PaletteOptions } from "@mui/material";
import { greyColors, colors } from "./colors";

export const paletteOptions = (mode: PaletteMode): PaletteOptions => {
	const grey = {
		50: greyColors(mode)[1],
		100: greyColors(mode)[2],
		200: greyColors(mode)[3],
		300: greyColors(mode)[4],
		400: greyColors(mode)[5],
		500: greyColors(mode)[6],
		600: greyColors(mode)[7],
		700: greyColors(mode)[8],
		800: greyColors(mode)[9],
		900: greyColors(mode)[10],
		A100: greyColors(mode)[1],
		A200: greyColors(mode)[2],
		A400: greyColors(mode)[3],
		A700: greyColors(mode)[4]
	};

	const contrastText = mode === "dark" ? "#000" : "#fff";
	return {
		primary: {
			main: colors(mode).primary[5],
			light: colors(mode).primary[3],
			dark: colors(mode).primary[6],
			contrastText,
			100: colors(mode).primary[1],
			200: colors(mode).primary[2],
			300: colors(mode).primary[3],
			400: colors(mode).primary[4],
			500: colors(mode).primary[5],
			600: colors(mode).primary[6],
			700: colors(mode).primary[7],
			800: colors(mode).primary[8],
			900: colors(mode).primary[9]
		},
		secondary: {
			main: grey[500],
			light: grey[300],
			dark: grey[700],
			contrastText,
			100: grey[100],
			200: grey[200],
			300: grey[300],
			400: grey[400],
			500: grey[500],
			600: grey[600],
			700: grey[700],
			800: grey[800],
			900: grey[900]
		},
		error: {
			light: colors(mode).error[1],
			main: colors(mode).error[2],
			dark: colors(mode).error[3],
			contrastText
		},
		warning: {
			light: colors(mode).warning[1],
			main: colors(mode).warning[2],
			dark: colors(mode).warning[3],
			contrastText
		},
		info: {
			light: colors(mode).info[1],
			main: colors(mode).info[2],
			dark: colors(mode).info[3],
			contrastText
		},
		success: {
			light: colors(mode).success[1],
			main: colors(mode).success[2],
			dark: colors(mode).success[3],
			contrastText
		},
		grey
	};
};
