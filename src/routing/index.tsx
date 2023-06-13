import { createBrowserRouter } from "react-router-dom";

import { authRoute } from "./authRoute";
import { mainRoute } from "./mainRoute";

export default createBrowserRouter([...authRoute, ...mainRoute]);
