import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

const initialState = {
	campuses: [],
	selectedCampus: {},
	students: []
};

export default (state = initialState, action) => {
	//your code here
	switch (action.type) {
		case SET_CAMPUSES:
			return { ...state, campuses: action.campuses };
	}
	return state;
};
