import { proxy } from "valtio";

import { AuthStore } from "types/store/auth";

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
