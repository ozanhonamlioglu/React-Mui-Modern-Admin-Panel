import "./showcase.css";
import Container from "@mui/material/Container";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import useIntersection from "hooks/useIntersection";
import AppBar from "./AppBar";

const ShowCase = () => {
	useIntersection(".section", "show", false, { threshold: 0.5 });

	return (
		<Container maxWidth={false} disableGutters>
			<AppBar />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</Container>
	);
};

export default ShowCase;
