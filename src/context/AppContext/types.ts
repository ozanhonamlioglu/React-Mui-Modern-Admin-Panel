import { PaletteMode } from "@mui/material";

export type AppState = {
	theme: PaletteMode;
};

export type AppAction = { type: "SWITCH_MODE" };
