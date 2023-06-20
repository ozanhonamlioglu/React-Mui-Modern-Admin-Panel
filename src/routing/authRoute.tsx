import { RouteObject } from "react-router-dom";

import Page from "layouts/Page";
import Login from "pages/Login";

export const authRoute: RouteObject[] = [
	{
		path: "/login",
		element: <Page />,
		children: [
			{
				path: "/login",
				element: <Login />
			}
		]
	}
];
