import router from "routing";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<CssBaseline />
			<RouterProvider router={router} />
		</Fragment>
	);
};

export default App;
