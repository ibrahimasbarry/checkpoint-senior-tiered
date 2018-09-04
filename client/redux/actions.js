import axios from 'axios';
import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => ({
	//your code here
	type: SET_CAMPUSES,
	campuses
});

export const selectCampus = () => ({
	type: SELECT_CAMPUS
	//you code here
});

export const addCampus = () => {
	//your code here
};

// THUNK CREATORS

export const fetchCampuses = () => {
	//your code here
};

export const postCampus = () => {
	//your code here
};
