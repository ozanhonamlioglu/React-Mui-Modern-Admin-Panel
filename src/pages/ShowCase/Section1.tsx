import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Section1 = () => {
	return (
		<Box className="sectionbox section text-section">
			<Stack>
				<Typography variant="h1" className="hidden">
					Hello Admin 👋
				</Typography>
				<Typography variant="h5" className="hidden">
					Are you looking for a dashboard?
				</Typography>
				<Typography variant="subtitle1" className="hidden">
					Then you are in the right place.
				</Typography>
			</Stack>
		</Box>
	);
};

export default Section1;
