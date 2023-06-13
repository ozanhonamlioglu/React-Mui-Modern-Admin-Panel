import Page from "layouts/Page";
import Login from "pages/Login";
import { RouteObject } from "react-router-dom";

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
