import Container, { ContainerProps } from "@mui/material/Container";
import { PropsWithChildren } from "react";

const FullPageContainer: React.FC<PropsWithChildren<ContainerProps>> = ({ children, sx, ...props }) => {
	return (
		<Container maxWidth={false} disableGutters sx={{ display: "flex", minHeight: "100vh", ...sx }} {...props}>
			{children}
		</Container>
	);
};

export default FullPageContainer;
