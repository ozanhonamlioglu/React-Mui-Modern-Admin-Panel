import { createTheme } from "@mui/material";
import React, { PropsWithChildren, useMemo } from "react";
import themeStore from "store/themeStore";
import { useSnapshot } from "valtio";
import { paletteOptions } from "./paletteOptions";
import { ThemeProvider } from "@emotion/react";

const MakeTheme: React.FC<PropsWithChildren> = ({ children }) => {
	const snap = useSnapshot(themeStore);
	const mode = snap.mode;

	const theme = useMemo(() => {
		const options = paletteOptions(mode);

		return createTheme({
			palette: {
				common: {
					black: "#000",
					white: "#fff"
				},
				...options,
				text: {
					primary: options.grey?.[900],
					secondary: options.grey?.[500],
					disabled: options.grey?.[300]
				},
				background: {
					paper: mode === "dark" ? options.grey?.[100] : options.grey?.[200],
					default: mode === "dark" ? options.grey?.[100] : options.grey?.[200]
				}
			}
		});
	}, [mode]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MakeTheme;
