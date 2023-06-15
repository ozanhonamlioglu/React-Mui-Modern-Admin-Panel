import router from "routing";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MakeTheme from "utils/theme/MakeTheme";

const App = () => {
	return (
		<MakeTheme>
			<CssBaseline />
			<RouterProvider router={router} />
		</MakeTheme>
	);
};

export default App;
