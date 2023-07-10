import { useContext } from "react";

import { AppContext } from ".";

const useAppState = () => {
	const { state, dispatch } = useContext(AppContext);

	return { state, dispatch };
};

export default useAppState;
