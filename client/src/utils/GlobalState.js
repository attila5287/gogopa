import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_FINANCIAL,
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_FINANCIALS,
  UPDATE_POSTS,
  ADD_FINANCIAL,
  ADD_POST,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
		case SET_CURRENT_FINANCIAL:
			return {
				...state,
				currentFinancial: action.financial,
				loading: false
			};
		case SET_CURRENT_POST:
			return {
				...state,
				currentPost: action.post,
				loading: false
			};

		case UPDATE_FINANCIALS:
			return {
				...state,
				financials: [...action.financials],
				loading: false
			};
		case UPDATE_POSTS:
			return {
				...state,
				posts: [...action.posts],
				loading: false
			};

		case ADD_POST:
			return {
				...state,
				posts: [action.post, ...state.posts],
				loading: false
			};
		case ADD_FINANCIAL:
			return {
				...state,
				financials: [action.financial, ...state.financials],
				loading: false
			};

		case REMOVE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => {
					return post._id !== action._id;
				})
			};

		case ADD_FAVORITE:
			return {
				...state,
				favorites: [action.post, ...state.favorites],
				loading: false
			};

		case UPDATE_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites],
				loading: false
			};

		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((post) => {
					return post._id !== action._id;
				})
			};

		case LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
		financials: [],
		posts: [],
		currentFinancial: {
			_id: 0,
			title: '',
			company: '',
			created: '',
			categories: [],
			notes: [],
		},
		currentPost: {
			_id: 0,
			title: '',
			body: '',
			author: ''
		},
		favorites: [],
		loading: false
	});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
