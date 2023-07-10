import "./index.css";

import AppBar from "./AppBar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import FullPageContainer from "components/flex/FullPageContainer";
import useIntersection from "hooks/useIntersection";

const ShowCase = () => {
	useIntersection(".section", "show", false, { threshold: 0.5 });

	return (
		<FullPageContainer sx={{ flexDirection: "column" }}>
			<AppBar />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</FullPageContainer>
	);
};

export default ShowCase;
