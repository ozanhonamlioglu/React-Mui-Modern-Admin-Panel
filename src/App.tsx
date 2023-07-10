import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";

import { AppProvider } from "context/AppContext";
import router from "routing";
import MakeTheme from "utils/theme/MakeTheme";

const App = () => {
	return (
		<AppProvider>
			<MakeTheme>
				<CssBaseline />
				<RouterProvider router={router} />
			</MakeTheme>
		</AppProvider>
	);
};

export default App;
