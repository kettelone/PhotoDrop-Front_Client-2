import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
	selfieUrl: '',
	selfieChanged: false
}

export const selfieSlice = createSlice({
	name: 'selfie',
	initialState,
	reducers: {
		update: (state, { payload: { selfieUrl } }) => {
			state.selfieUrl = selfieUrl
		},
		change: (state) => {
			state.selfieChanged = state.selfieChanged === true ? false : true
		}
	}
})

export const { update, change } = selfieSlice.actions

export const selectSelfie = (state: RootState) => state.selfieUpdate

export default selfieSlice.reducer
