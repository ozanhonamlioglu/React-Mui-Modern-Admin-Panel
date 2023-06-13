import { ThemeStore } from "types/store/theme";
import { proxy } from "valtio";

export const themeStore: ThemeStore = proxy({
	mode: "light"
});

export default themeStore;
