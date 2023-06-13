import { AuthStore } from "types/store/auth";
import { proxy } from "valtio";

const authStore: AuthStore = proxy({
	user: {
		displayName: "John Doe",
		email: "john@gmail.com"
	},
	auth: {
		isLogged: true
	}
});

export default authStore;
