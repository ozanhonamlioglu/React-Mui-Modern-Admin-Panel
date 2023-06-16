import themeStore from "store/themeStore";
import { ThemeReducers } from "types/reducers/theme";

export const themeReducer = <T extends keyof ThemeReducers>(action: T, value: ThemeReducers[T]) => {
	switch (action) {
		case "changeMode":
			themeStore.mode = value;
			break;
	}
};
