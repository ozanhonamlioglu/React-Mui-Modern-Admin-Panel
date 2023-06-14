import "./showcase.css";
import Container from "@mui/material/Container";

import Section1 from "./Section1";
import Section2 from "./Section2";

import useIntersection from "hooks/useIntersection";

const ShowCase = () => {
	useIntersection(".sections", "show", { threshold: 0.5 });

	return (
		<Container sx={{ height: "100vh" }} maxWidth={false} disableGutters>
			<Section1 />
			<Section2 />
		</Container>
	);
};

export default ShowCase;
