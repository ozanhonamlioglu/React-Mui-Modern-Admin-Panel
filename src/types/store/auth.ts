export type User = {
	displayName: string;
	email: string;
};

export type Auth = {
	isLogged: boolean;
};

export type AuthStore = {
	user?: User;
	auth: Auth;
};
