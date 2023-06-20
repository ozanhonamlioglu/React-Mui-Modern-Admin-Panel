import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface Props {
	label: string;
	RightIcon?: React.ElementType;
	password?: boolean;
	helperText?: string;
	errorText?: string;
}

const InputWithIcon: React.FC<Props> = ({ label, RightIcon, password, helperText, errorText }) => {
	const [show, setShow] = useState(false);
	const theme = useTheme();

	return (
		<Box>
			<Typography>{label}</Typography>
			<Paper elevation={2} sx={{ display: "flex", alignItems: "center", paddingX: 1, paddingY: 0.5 }}>
				<InputBase sx={{ flex: 1 }} type={password ? (show ? "text" : "password") : "text"} />
				{RightIcon && (
					<>
						<Divider sx={{ m: 0.5, height: 25, marginRight: 1 }} orientation="vertical" />
						{password ? (
							<ButtonBase onClick={() => setShow(x => !x)}>
								<RightIcon />
							</ButtonBase>
						) : (
							<RightIcon />
						)}
					</>
				)}
			</Paper>
			{(helperText || errorText) && (
				<Stack>
					<Typography variant="caption" color={theme.palette.grey[600]}>
						{helperText}
					</Typography>
					<Typography variant="caption" color={theme.palette.error.main}>
						{errorText}
					</Typography>
				</Stack>
			)}
		</Box>
	);
};

export default InputWithIcon;
