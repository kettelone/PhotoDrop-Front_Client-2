import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

const initialState = {
	country: 'US',
	dialCode: '+1',
	fullNumber: ''
}

export const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		update: (state, { payload: { code, dial } }) => {
			state.country = code
			state.dialCode = dial
		},
		updateFullNumber: (state, { payload: { fullNumber } }) => {
			state.fullNumber = fullNumber
		}
	}
})

export const { update, updateFullNumber } = countrySlice.actions

export const selectCountry = (state: RootState) => state.countryUpdate

export default countrySlice.reducer
