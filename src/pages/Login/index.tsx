import EmailOutlined from "@mui/icons-material/EmailOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import InputWithIcon from "components/InputWithIcon";

const Login = () => {
	return (
		<Container maxWidth={false} disableGutters sx={{ display: "flex", minHeight: "100vh" }}>
			<Grid container>
				<Grid item md={3} lg={4} />
				<Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
					<Paper
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flex: 1,
							padding: 5
						}}
						elevation={0}>
						<Stack sx={{ width: "100%" }} spacing={2}>
							<Typography variant="h3" sx={{ alignSelf: "center" }} fontFamily={"Tilt Prism, cursive"}>
								Dashboard Login
							</Typography>
							<InputWithIcon label={"Email"} RightIcon={EmailOutlined} />
							<InputWithIcon label={"Password"} password RightIcon={RemoveRedEyeIcon} />

							<Link href="forgot-password" sx={{ alignSelf: "flex-end" }} variant="caption">
								Forgot password?
							</Link>

							<Button variant="contained">Login</Button>
							<Divider>or</Divider>
							<Button variant="outlined">Register</Button>
						</Stack>
					</Paper>
				</Grid>
				<Grid item md={3} lg={4} />
			</Grid>
		</Container>
	);
};

export default Login;
