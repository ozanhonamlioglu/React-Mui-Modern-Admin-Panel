import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";

import { appReducer, initialState } from "./reducers";
import { AppAction, AppState } from "./types";

export const AppContext = createContext<{
	state: AppState;
	dispatch: Dispatch<AppAction>;
}>({
	state: initialState,
	dispatch: () => null
});

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
