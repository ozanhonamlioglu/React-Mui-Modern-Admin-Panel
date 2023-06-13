import { RouteObject } from "react-router-dom";
import Page from "layouts/Page";

export const mainRoute: RouteObject[] = [
	{
		path: "/",
		element: <Page />,
		children: [
			{
				path: "/",
				element: <div>Home</div>
			}
		]
	}
];
