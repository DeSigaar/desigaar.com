import { useMemo } from "react";
import { createStore, applyMiddleware, Store } from "node_modules/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ActionTypes, State, CHANGE_LANGUAGE, CHANGE_THEME } from "@/types";

let store: Store<State, ActionTypes> | undefined;

const initialState: State = {
	app: {
		theme: "system",
		language: "en",
	},
};

const reducer = (state = initialState, action: ActionTypes): State => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				app: {
					...state.app,
					theme: action.theme,
				},
			};
		case CHANGE_LANGUAGE:
			return {
				...state,
				app: {
					...state.app,
					language: action.language,
				},
			};
		default:
			return state;
	}
};

const initStore = (preloadedState = initialState) =>
	createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));

export const initializeStore = (preloadedState: State): Store<State, ActionTypes> => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({
			...preloadedState,
			...store.getState(),
		});
		store = undefined;
	}

	if (typeof window === "undefined") return _store;
	if (!store) store = _store;

	return _store;
};

export const useStore = (initialState: State): Store<State, ActionTypes> => {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
};
