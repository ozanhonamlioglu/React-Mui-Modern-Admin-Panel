import { PaletteMode } from "@mui/material";

// Primary grey colors
export const greyColors = (mode: PaletteMode) => {
	let grey = [
		"#ffffff",
		"#fafafa",
		"#f5f5f5",
		"#f0f0f0",
		"#d9d9d9",
		"#bfbfbf",
		"#8c8c8c",
		"#595959",
		"#262626",
		"#141414",
		"#000000"
	];

	if (mode === "dark") {
		grey = [
			"#000000",
			"#141414",
			"#1e1e1e",
			"#595959",
			"#8c8c8c",
			"#bfbfbf",
			"#d9d9d9",
			"#f0f0f0",
			"#f5f5f5",
			"#fafafa",
			"#ffffff"
		];
	}

	return grey;
};

export const colors = (mode: PaletteMode) => {
	let primary = [
		"#f0f6ff",
		"#edf4ff",
		"#bed3f7",
		"#8faeeb",
		"#6488de",
		"#3c64d0",
		"#2947ab",
		"#192f85",
		"#0d1b5e",
		"#070e38"
	];
	let error = ["#FDE8E7", "#F25E52", "#F04134", "#EE3B2F", "#E92A21"];
	let warning = ["#FFF7E0", "#FFC926", "#FFBF00", "#FFB900", "#FFA900"];
	let info = ["#E0F4F5", "#26B0BA", "#00A2AE", "#009AA7", "#008694"];
	let success = ["#E0F5EA", "#26B56E", "#00A854", "#00A04D", "#008D3A"];

	if (mode === "dark") {
		primary = [
			"#1d212d",
			"#212841",
			"#273353",
			"#2c3e6e",
			"#324c92",
			"#385ab5",
			"#5d7dcb",
			"#89a7e1",
			"#b9cef0",
			"#e9f0fb"
		];
		error = ["#321d1d", "#7d2e28", "#d13c31", "#e66859", "#f8baaf"];
		warning = ["#342c1a", "#836611", "#dda705", "#e9bf28", "#f8e577"];
		info = ["#1a2628", "#11595f", "#058e98", "#1ea6aa", "#64cfcb"];
		success = ["#1a2721", "#115c36", "#05934c", "#1da65d", "#61ca8b"];
	}

	return {
		primary,
		error,
		warning,
		info,
		success
	};
};
