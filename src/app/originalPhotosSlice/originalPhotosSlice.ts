import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface IntialState {
	[key: string]: string
}

const initialState: IntialState = {}

export const originalPhotosSlice = createSlice({
	name: 'originalPhotos',
	initialState,
	reducers: {
		updateOriginalPhotos: (state, { payload: onePhoto }) => {
			return { ...state, ...onePhoto }
		}
	}
})

export const { updateOriginalPhotos } = originalPhotosSlice.actions

export const selectOriginalPhotos = (state: RootState) =>
	state.originalPhotosUpdate

export default originalPhotosSlice.reducer
