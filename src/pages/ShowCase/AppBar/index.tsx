import Box from "@mui/material/Box";

import GrowingBorderMenu from "./GrowingBorderMenu";

import SunAndMoonSwitch from "components/custom/DarkLightSwitch";

const pages = [
	{ name: "Login", path: "/login" },
	{ name: "Components", path: "/components" }
];

const AppBar = () => {
	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				zIndex: 1,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between"
			}}
			px={4}
			bgcolor="primary.400">
			<GrowingBorderMenu pages={pages} />
			<SunAndMoonSwitch />
		</Box>
	);
};

export default AppBar;
