import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

const initialState = {
	isFetching: false,
	isAuthenticated: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsFetching: (state) => {
			state.isFetching === true ? false : true
		},
		setIsAuth: (state) => {
			state.isAuthenticated === true ? false : true
		}
	}
})

export const { setIsFetching, setIsAuth } = authSlice.actions

export const selectAuth = (state: RootState) => state.authUpdate

export default authSlice.reducer
