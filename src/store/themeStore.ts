import { proxy } from "valtio";

import { ThemeStore } from "types/store/theme";

export const themeStore: ThemeStore = proxy({
	mode: "light"
});

export default themeStore;
