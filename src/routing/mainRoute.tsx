import { RouteObject } from "react-router-dom";

import Page from "layouts/Page";
import Error404 from "pages/errors/Error404";
import Home from "pages/Home";
import ShowCase from "pages/ShowCase";

export const mainRoute: RouteObject[] = [
	{
		path: "/",
		element: <ShowCase />
	},
	{
		path: "/home",
		element: <Page />,
		children: [
			{
				path: "/home",
				element: <Home />
			}
		]
	},
	{
		path: "*",
		element: <Error404 />
	}
];
