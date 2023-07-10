import { AppAction, AppState } from "./types";

export const initialState: AppState = {
	theme: "light"
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
	switch (action.type) {
		case "SWITCH_MODE":
			return { ...state, theme: state.theme === "light" ? "dark" : "light" };

		default:
			return state;
	}
};
