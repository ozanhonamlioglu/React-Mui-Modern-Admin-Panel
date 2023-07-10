import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React, { PropsWithChildren, useMemo } from "react";

import { paletteOptions } from "./paletteOptions";

import useAppState from "context/AppContext/useAppState";

const MakeTheme: React.FC<PropsWithChildren> = ({ children }) => {
	const { state } = useAppState();

	const theme = useMemo(() => {
		const options = paletteOptions(state.theme);

		return createTheme({
			palette: {
				common: {
					black: "#000",
					white: "#fff"
				},
				...options,
				text: {
					primary: options.grey?.[700],
					secondary: options.grey?.[500],
					disabled: options.grey?.[300]
				},
				background: {
					paper: state.theme === "dark" ? options.grey?.[100] : options.grey?.[200],
					default: state.theme === "dark" ? options.grey?.[100] : options.grey?.[200]
				}
			}
		});
	}, [state.theme]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MakeTheme;
