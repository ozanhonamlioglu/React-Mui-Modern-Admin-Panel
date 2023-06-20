import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";

import router from "routing";
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
